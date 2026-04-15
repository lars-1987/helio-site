import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Helio",
  description: "How Helio handles your data and privacy.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Helio",
    description: "How Helio handles your data and privacy.",
    url: "https://gethelio.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[48rem] px-6 pt-32 pb-20 sm:px-8 md:pt-40">
      <Link
        href="/"
        className="mb-10 inline-block text-[13px] font-medium text-ink/50 hover:text-ink/80"
      >
        ← Back to Helio
      </Link>

      <article className="prose-helio">
        <h1>Privacy Policy</h1>
        <p className="meta">Last updated: April 2026</p>

        <h2>Overview</h2>
        <p>
          Helio is designed with privacy as a core principle. Your data stays on
          your device. We don&apos;t collect, store, or transmit your personal
          information.
        </p>

        <h2>Data storage</h2>
        <p>
          All project data, session logs, micro-tasks, and session notes are
          stored locally on your device using an on-device database. None of this
          data is sent to any server, cloud service, or third party.
        </p>

        <h2>No accounts</h2>
        <p>
          Helio does not require an account, email address, or sign-up of any
          kind. There is no user authentication system and no personal
          information is collected during use.
        </p>

        <h2>Analytics</h2>
        <p>
          Helio may collect anonymous, aggregated usage analytics to help improve
          the app. This data cannot be used to identify individual users.
          Analytics may include app launch counts, feature usage frequency, and
          general session statistics. No personal data, project names, session
          content, or notes are ever included in analytics data.
        </p>
        <p>
          Analytics are processed by TelemetryDeck, a privacy-first analytics
          provider that does not use cookies, does not track users across apps,
          and is fully GDPR compliant.
        </p>

        <h2>Subscriptions</h2>
        <p>
          If you subscribe to Helio Plus, your payment is processed entirely by
          Apple through the App Store. Helio does not have access to your payment
          information, credit card details, or Apple ID.
        </p>
        <p>
          Subscription status is managed by RevenueCat, a third-party
          subscription management service. RevenueCat receives an anonymous app
          user ID and subscription status from the App Store. It does not receive
          your name, email, or any personal information.
        </p>

        <h2>Calendar integration</h2>
        <p>
          Helio can optionally sync sessions to your device&apos;s calendar
          using Apple&apos;s EventKit framework. This integration operates
          entirely on-device. Calendar data is not sent to any external server.
          You can enable or disable calendar sync at any time in Helio&apos;s
          settings.
        </p>

        <h2>Data export</h2>
        <p>
          Helio Plus subscribers can export their project and session data as
          JSON files. Exported files are saved locally to your device. No data is
          uploaded or transmitted during export.
        </p>

        <h2>Third-party services</h2>
        <ul>
          <li>
            <strong>Apple App Store</strong> — app distribution and payment
            processing
          </li>
          <li>
            <strong>RevenueCat</strong> — anonymous subscription status
            management
          </li>
          <li>
            <strong>TelemetryDeck</strong> — anonymous, privacy-first usage
            analytics
          </li>
        </ul>
        <p>
          Helio does not use advertising networks, tracking pixels,
          fingerprinting, or any form of cross-app tracking.
        </p>

        <h2>Children&apos;s privacy</h2>
        <p>
          Helio does not knowingly collect any data from children under the age
          of 13. Since Helio does not collect personal data from any user, no
          special provisions are necessary.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If this privacy policy is updated, the changes will be reflected on
          this page with an updated date. Continued use of Helio after changes
          constitutes acceptance of the updated policy.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, you can reach us at{" "}
          <a href="mailto:privacy@gethelio.app">privacy@gethelio.app</a>.
        </p>
      </article>
    </main>
  );
}
