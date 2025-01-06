import { Cookie } from "lucide-react"; // Importing Lucide Cookie icon

const CookiesPolicy = () => {
  return (
    <div className="p-16 sm:px-6 lg:col-span-3 lg:px-8 max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
      <div className="flex items-center space-x-3 mb-8 ">
        <Cookie className="text-blue-500 h-8 w-8" /> {/* Cookie Icon */}
        <h1 className="text-4xl font-bold text-primary">Cookies Policy</h1>
      </div>

      <p className="text-center mb-8">Last updated: January 2025</p>

      <p className="mb-6">
        This Cookies Policy explains how we use cookies on our website, what
        cookies are, and how you can control them. By using our website, you
        consent to the use of cookies in accordance with this policy.
      </p>

      <h2 className="text-3xl font-semibold text-primary mb-4">1. What Are Cookies?</h2>
      <p className="mb-6">
        Cookies are small text files placed on your device when you visit a website.
        These files allow websites to remember your preferences, activities, and
        interactions. They help enhance your browsing experience by saving time and
        personalizing content.
      </p>

      <h2 className="text-3xl font-semibold text-primary mb-4">2. Types of Cookies We Use</h2>
      <p className="mb-6">
        We use different types of cookies to improve your experience on our website:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be turned off in our systems. They enable basic functions such as page navigation and access to secure areas of the website.</li>
        <li><strong>Preference Cookies:</strong> These cookies allow the website to remember your preferences (such as language settings) and provide enhanced, more personalized features.</li>
        <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with the website, including the pages they visit most often and whether they receive error messages. This allows us to improve our website's performance.</li>
        <li><strong>Advertising Cookies:</strong> These cookies are used to track your browsing habits and show you relevant advertisements based on your interests.</li>
      </ul>

      <h2 className="text-3xl font-semibold text-primary mb-4">3. How We Use Cookies</h2>
      <p className="mb-6">
        We use cookies for the following purposes:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>To enhance your user experience by remembering your preferences and actions on our website.</li>
        <li>To analyze website traffic and improve the functionality of our site.</li>
        <li>To show you personalized ads based on your interests.</li>
        <li>To monitor website performance and fix issues for a smoother browsing experience.</li>
      </ul>

      <h2 className="text-3xl font-semibold text-primary mb-4">4. Controlling Cookies</h2>
      <p className="mb-6">
        You have the right to control the use of cookies on our website. You can:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Manage or disable cookies through your browser settings.</li>
        <li>Use tools provided by your browser or third-party websites to manage your preferences.</li>
        <li>Disable cookies if you prefer not to have personalized advertisements, but please note that this may limit your experience on the website.</li>
      </ul>

      <h2 className="text-3xl font-semibold text-primary mb-4">5. Cookie Preferences</h2>
      <p className="mb-6">
        You can change your cookie preferences by visiting your browser settings and
        disabling non-essential cookies. However, please note that blocking certain
        cookies may affect your experience and limit functionality on our website.
      </p>

      <h2 className="text-3xl font-semibold text-primary mb-4">6. Changes to This Cookie Policy</h2>
      <p className="mb-6">
        We may update this Cookies Policy from time to time. Any changes will be
        posted on this page with an updated "Last Updated" date. We encourage you to
        review this policy periodically to stay informed about how we are using cookies.
      </p>

      <h2 className="text-3xl font-semibold text-primary mb-4">7. Contact Us</h2>
      <p className="mb-6">
        If you have any questions or concerns about this Cookies Policy or how we use
        cookies, please contact us at{" "}
        <a href="mailto:support@dyvos.com" className="text-blue-600">
          info@dyvos.com
        </a>.
      </p>
    </div>
  );
};

export default CookiesPolicy;
