import Link from "next/link";

const LAST_UPDATED = "June 8, 2025";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="glass-panel p-8 scroll-mt-24">
      <h2 className="text-lg font-semibold text-slate-900 mb-4 tracking-tight">{title}</h2>
      <div className="space-y-3 text-slate-500 text-sm leading-relaxed">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-10 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-500 text-sm mb-6 transition-colors"
        >
          ← Back to Home
        </Link>
        <h1 className="heading-glow text-4xl font-semibold text-slate-900 tracking-tight mb-2">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-slate-400 text-sm">Last updated: {LAST_UPDATED}</p>
      </div>

      {/* Quick nav */}
      <nav
        className="glass-panel p-5 mb-8 text-sm"
        aria-label="Table of contents"
      >
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">On this page</p>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            ["#eligibility", "1. Eligibility"],
            ["#service", "2. The Service"],
            ["#license", "3. License"],
            ["#discord", "4. Discord Community"],
            ["#payments", "5. Payments & Refunds"],
            ["#conduct", "6. Acceptable Use"],
            ["#ip", "7. Intellectual Property"],
            ["#disclaimer", "8. Disclaimer"],
            ["#privacy", "9. Privacy"],
            ["#liability", "10. Limitation of Liability"],
            ["#refunds", "11. Refund Policy"],
            ["#changes", "12. Changes to Terms"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-slate-500 hover:text-blue-600 transition-colors py-0.5"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Introduction */}
      <div
        className="mb-6 px-5 py-4 rounded-xl text-sm text-slate-600 leading-relaxed"
        style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.18)" }}
      >
        By purchasing or using any marlbot product, or by joining our Discord support server, you agree to
        these Terms of Service in full. If you disagree with any part, please do not use our products or community.
      </div>

      <div className="space-y-5">

        {/* 1. Eligibility */}
        <Section id="eligibility" title="1. Eligibility">
          <p>
            You must be at least <strong className="text-slate-700">13 years of age</strong> to use marlbot or join our Discord support server. This minimum age matches the requirement set by Discord's Terms of Service. If you reside in a jurisdiction that requires a higher age of digital consent (for example, 16 in certain EU countries), you must meet that higher threshold.
          </p>
          <p>
            By agreeing to these Terms, you confirm that you are of legal age in your jurisdiction to enter into a binding agreement. Purchases made by minors without parental consent may be cancelled and refunded at our discretion.
          </p>
        </Section>

        {/* 2. The Service */}
        <Section id="service" title="2. The Service">
          <p>
            marlbot provides locally-installed software tools designed as <strong className="text-slate-700">training aids</strong> for Rocket League players. Our products simulate gameplay scenarios to help players develop mechanics, positioning, and decision-making skills.
          </p>
          <p>
            marlbot is an independent product and is <strong className="text-slate-700">not affiliated with, endorsed by, or sponsored by Psyonix LLC, Epic Games, or Discord Inc.</strong> All product and company names are trademarks of their respective owners.
          </p>
          <p>
            We make no guarantee that our software will work with any particular version of Rocket League or operating system, and we reserve the right to update, modify, or discontinue features at any time.
          </p>
        </Section>

        {/* 3. License */}
        <Section id="license" title="3. License">
          <p>
            Upon purchase, marlbot grants you a <strong className="text-slate-700">personal, non-exclusive, non-transferable</strong> license to use the software on one (1) device. The following are strictly prohibited:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Sharing, reselling, or distributing your license key</li>
            <li>Reverse engineering, decompiling, or modifying the software</li>
            <li>Using the software on behalf of, or to provide services to, any third party</li>
            <li>Creating derivative works based on marlbot software</li>
            <li>Using automation scripts or bots to interact with your marlbot license portal</li>
          </ul>
          <p>
            Violation of any license restriction results in immediate termination of your license without refund.
          </p>
        </Section>

        {/* 4. Discord Community */}
        <Section id="discord" title="4. Discord Community Rules">
          <p>
            Our primary support channel is a Discord server. By joining, you agree to both these Terms
            <strong className="text-slate-700"> and </strong>
            <a
              href="https://discord.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Discord's Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://discord.com/guidelines"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Community Guidelines
            </a>
            . The following rules apply in our server:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong className="text-slate-600">Respect everyone.</strong> No harassment, hate speech, threats, discrimination, or personal attacks — regardless of rank, origin, or opinion.</li>
            <li><strong className="text-slate-600">No spam or self-promotion.</strong> Do not flood channels, post unsolicited advertisements, or DM members without permission.</li>
            <li><strong className="text-slate-600">No NSFW content.</strong> Our server is open to users 13 and older. All content must be appropriate for a general audience.</li>
            <li><strong className="text-slate-600">No self-bots or automation.</strong> Do not use automated Discord accounts (self-bots) in our server. This violates Discord's own Terms of Service.</li>
            <li><strong className="text-slate-600">No sharing of exploits or cheats</strong> targeting other players, games, or platforms beyond legitimate training use.</li>
            <li><strong className="text-slate-600">No doxxing or privacy violations.</strong> Never share another person's private or identifying information without their explicit consent.</li>
            <li><strong className="text-slate-600">Follow Discord's guidelines.</strong> Any behaviour that violates Discord's Community Guidelines may result in removal from our server and potential report to Discord Trust &amp; Safety.</li>
          </ul>
          <p>
            Moderators reserve the right to remove any content and ban any user who violates these rules, at their discretion and without prior notice.
          </p>
        </Section>

        {/* 5. Payments */}
        <Section id="payments" title="5. Payments">
          <p>
            All prices are listed in USD and are charged on a <strong className="text-slate-700">monthly subscription</strong> basis unless otherwise stated. Subscriptions renew automatically at the end of each billing period.
          </p>
          <p>
            You authorise us to charge your payment method on file for recurring fees. It is your responsibility to ensure your payment information remains accurate and up to date. We use industry-standard encryption and third-party payment processors; your card details are never stored on our servers.
          </p>
          <p>
            We reserve the right to change subscription prices with at least <strong className="text-slate-700">30 days' notice</strong> sent to your registered email.
          </p>
        </Section>

        {/* 6. Acceptable Use */}
        <Section id="conduct" title="6. Acceptable Use">
          <p>You agree to use marlbot software only for lawful purposes. You must not:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Use the software in a manner that violates any applicable local, national, or international law or regulation</li>
            <li>Intentionally harm, disrupt, or interfere with other players' experience in online matches</li>
            <li>Use marlbot in tournament or ranked play in a way that deceives opponents or violates the hosting platform's rules</li>
            <li>Attempt to gain unauthorised access to any computer system, network, or data</li>
            <li>Transmit any malware, spyware, or malicious code through our platform or Discord community</li>
          </ul>
          <p>
            We encourage using marlbot purely for <strong className="text-slate-700">personal skill development</strong> in private training environments.
          </p>
        </Section>

        {/* 7. IP */}
        <Section id="ip" title="7. Intellectual Property">
          <p>
            All software, branding, website content, and documentation associated with marlbot are the
            exclusive property of marlbot and its licensors. Nothing in these Terms transfers any intellectual
            property rights to you.
          </p>
          <p>
            Rocket League® is a registered trademark of Psyonix LLC. Discord® is a registered trademark of Discord Inc.
            These names are used solely for descriptive purposes and do not imply any endorsement.
          </p>
        </Section>

        {/* 8. Disclaimer */}
        <Section id="disclaimer" title="8. Disclaimer of Warranties">
          <p>
            marlbot software is provided <strong className="text-slate-700">"as is"</strong> without warranties of any kind, express or implied. We do not warrant that the software will be uninterrupted, error-free, or free from viruses or other harmful components.
          </p>
          <p>
            We make no representations regarding compatibility with any version of Rocket League, or that use of our software will not result in account penalties from Psyonix or Epic Games. <strong className="text-slate-700">Use is entirely at your own risk.</strong>
          </p>
        </Section>

        {/* 9. Privacy */}
        <Section id="privacy" title="9. Privacy Policy">
          <p>
            We collect only the minimum personal data required to process your purchase and deliver your license key:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong className="text-slate-600">Email address</strong> — for license delivery and account communication</li>
            <li><strong className="text-slate-600">Payment information</strong> — processed securely by our payment provider; we do not store card numbers</li>
            <li><strong className="text-slate-600">Usage data</strong> — anonymous, aggregated statistics to improve the product (no personally identifiable information)</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal data to third parties. We do not collect your Discord username, ID, or any data from our Discord server.
          </p>
          <p>
            You may request deletion of your personal data at any time by contacting support via our Discord server. We will process requests within 30 days.
          </p>
        </Section>

        {/* 10. Limitation of Liability */}
        <Section id="liability" title="10. Limitation of Liability">
          <p>
            To the maximum extent permitted by applicable law, marlbot shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including but not limited to loss of profits, data, or goodwill — arising from your use of or inability to use our products or Discord community.
          </p>
          <p>
            In any event, our total liability to you for all claims arising under these Terms shall not exceed the amount you paid for your marlbot subscription in the three (3) months preceding the claim.
          </p>
        </Section>

        {/* 11. Refunds */}
        <Section id="refunds" title="11. Refund Policy">
          <p>
            We offer a <strong className="text-slate-700">7-day money-back guarantee</strong> from the date of your initial purchase. To request a refund, contact us in our Discord support server within that window. Refunds are issued to the original payment method and typically processed within 5–10 business days.
          </p>
          <p>
            Refunds are not available if your license key has been shared, your account has been terminated for a Terms violation, or you are requesting a refund beyond the 7-day period. Renewal charges are non-refundable once processed; cancel your subscription before renewal to avoid the next charge.
          </p>
        </Section>

        {/* 12. Changes */}
        <Section id="changes" title="12. Changes to These Terms">
          <p>
            We reserve the right to modify these Terms at any time. When we make material changes, we will post an announcement in our Discord server and update the "Last updated" date at the top of this page.
          </p>
          <p>
            Continued use of marlbot products or our Discord community after changes are posted constitutes your acceptance of the revised Terms. If you disagree with the changes, you must cancel your subscription and cease use of our products.
          </p>
        </Section>

        {/* Contact */}
        <div
          className="px-8 py-6 rounded-2xl text-sm"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(96,165,250,0.06))",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <p className="font-semibold text-slate-900 mb-1">Questions about these Terms?</p>
          <p className="text-slate-500">
            Reach us in our{" "}
            <a
              href="https://discord.gg/8ATPhSTKjG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Discord support server
            </a>{" "}
            in the <span className="font-medium text-slate-600">#support</span> channel.
          </p>
        </div>
      </div>
    </div>
  );
}
