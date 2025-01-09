import { useEffect, useImperativeHandle, useRef } from "react"
import { toast } from "react-toastify";
const Dialog = ({ref}) => {
    
    const dialogRef = useRef();
    useImperativeHandle(ref,()=>({
        show:()=>dialogRef.current.showModal(),
        close:()=>dialogRef.current.close()
    }))
    const postEmail = async(data) => {
        console.log(import.meta.env.VITE_API_URL)
       try {
         const res = await fetch(`${import.meta.env.VITE_API_URL}/email`,{
             method:"POST",
             headers:{
                 "Content-Type": "application/json"
             },
             body:JSON.stringify(data)
         })
         if(res.ok){
            toast.success("sent")
            const data = await res.json();
            console.log("Response data:", data);
         }else {
            toast.error("failed to send!")
            console.error("Error:", res.json());
          }
       } catch (error) {
        toast.error("failed to send!")
        console.error("Error:", error);
       }
    }
    useEffect(() => {
        const handleEsc = (event) => {
          if (event.key === "Escape") {
            dialogRef.current.close();
          }
        };
    
        // Add event listener when the dialog is mounted
        document.addEventListener("keydown", handleEsc);
    
        return () => {
          // Clean up the event listener when the dialog unmounts
          document.removeEventListener("keydown", handleEsc);
        };
      }, []);

      const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const formData = Object.fromEntries(form.entries())
        console.log(formData)
        postEmail(formData)
      }
    
  return (
    <dialog ref={dialogRef} className="rounded-2xl   w-3/4 lg:w-2/4 relative">
        <form className="text-gray-700 text-base" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 px-8 py-8">
            <div className="flex  gap-2 items-center">
                <label htmlFor="name" className=" font-semibold">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" className="shadow-sm focus:outline-none font-medium p-2 focus:border-b-2 focus:border-primary/60"/>
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="email" className=" font-semibold">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" className="shadow-sm focus:outline-none font-medium p-2 focus:border-b-2 focus:border-primary/60"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message" className=" font-semibold">Message</label>
                <textarea id="message" name="message" placeholder="Your message" className="w-full min-h-32 sm:min-h-28 rounded-md shadow-sm text-lg focus:border-b-2 focus:border-primary/60  outline-none resize-none p-2"/>
            </div>
            </div>
            <div className="bg-neutral-50 mt-4 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-4">
                <button type="submit" className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary sm:ml-3 sm:w-auto">Send</button>
                <button type="reset" onClick={()=>dialogRef.current.close()} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
            </div>
        </form>
    </dialog>
  )
}

export default Dialog