import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Helio",
  description: "The terms governing your use of Helio.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service — Helio",
    description: "The terms governing your use of Helio.",
    url: "https://gethelio.app/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-[48rem] px-6 pt-32 pb-20 sm:px-8 md:pt-40">
      <Link
        href="/"
        className="mb-10 inline-block text-[13px] font-medium text-ink/50 hover:text-ink/80"
      >
        ← Back to Helio
      </Link>

      <article className="prose-helio">
        <h1>Terms of Service</h1>
        <p className="meta">Last updated: April 2026</p>

        <h2>Agreement</h2>
        <p>
          By downloading, installing, or using Helio, you agree to these terms.
          If you do not agree, do not use the app.
        </p>

        <h2>Description of service</h2>
        <p>
          Helio is a project rotation and session management application for
          macOS, iOS, and iPadOS. It provides tools for scheduling work sessions
          across multiple projects, capturing session context, and tracking time
          allocation. All data is stored locally on your device.
        </p>

        <h2>Use of the app</h2>
        <p>
          You may use Helio for personal or professional purposes. You agree not
          to reverse engineer, decompile, or disassemble the application, or
          attempt to extract source code from it.
        </p>

        <h2>Free and paid tiers</h2>
        <p>
          Helio offers a free tier with access to up to 3 active projects and
          the full session lifecycle. Helio Plus is a paid subscription that
          unlocks unlimited projects and additional features including recurring
          schedules, weekly analytics, rotation targets, attention alerts, and
          data export.
        </p>

        <h2>Subscriptions and payments</h2>
        <p>
          Helio Plus subscriptions are billed through the Apple App Store. By
          subscribing, you agree to Apple&apos;s terms of service for in-app
          purchases and subscriptions. Subscription pricing is displayed in the
          app and on the App Store listing before purchase.
        </p>
        <p>
          Subscriptions automatically renew unless cancelled at least 24 hours
          before the end of the current billing period. You can manage or cancel
          your subscription at any time through your Apple ID settings.
        </p>
        <p>
          Refunds are handled by Apple in accordance with their refund policy.
          Helio does not process payments directly and cannot issue refunds.
        </p>

        <h2>Cancellation</h2>
        <p>
          If you cancel your Helio Plus subscription, you retain access to Plus
          features until the end of your current billing period. After that, your
          account reverts to the free tier. All your data, projects, and session
          history remain intact. Projects beyond the 3-project free limit become
          read-only until you re-subscribe or archive projects to return to the
          free limit.
        </p>

        <h2>Data and privacy</h2>
        <p>
          Helio stores all data locally on your device. We do not collect,
          transmit, or store personal data on any server. For full details, see
          our{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>

        <h2>Data responsibility</h2>
        <p>
          Because all data is stored on your device, you are responsible for
          maintaining backups of your device. Helio is not responsible for data
          loss resulting from device failure, operating system issues, or
          accidental deletion. Helio Plus subscribers can export data as JSON for
          backup purposes.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Helio, including its design, code, branding, and documentation, is the
          intellectual property of its developer. You are granted a limited,
          non-exclusive, non-transferable licence to use the application for its
          intended purpose.
        </p>

        <h2>Availability and updates</h2>
        <p>
          Helio is provided on an &quot;as is&quot; basis. We aim to maintain and
          improve the app but do not guarantee uninterrupted availability or that
          the app will be free of errors.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Helio and its developer shall
          not be liable for any indirect, incidental, special, consequential, or
          punitive damages arising from your use of the app.
        </p>
        <p>
          Nothing in these terms excludes or limits any consumer guarantees or
          rights that cannot be excluded under Australian Consumer Law or the
          laws of your jurisdiction.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of Victoria, Australia. Any
          disputes arising from the use of Helio shall be subject to the
          jurisdiction of the courts of Victoria, Australia.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          These terms may be updated from time to time. Changes will be reflected
          on this page with an updated date. Continued use of Helio after changes
          constitutes acceptance of the updated terms.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about these terms, you can reach us at{" "}
          <a href="mailto:support@gethelio.app">support@gethelio.app</a>.
        </p>
      </article>
    </main>
  );
}
