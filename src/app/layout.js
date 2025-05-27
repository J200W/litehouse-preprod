import { Geist, Geist_Mono } from "next/font/google";
import "./styles/init.css";
import "./styles/style.scss";
import Footer from "./(components)/footer";
import Header from "./(components)/header";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Lite House Residences",
    description: "Lite Your Way Home",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
                <link rel="stylesheet" href="../font-awesome-4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" />
                <Script
                    src="https://code.jquery.com/jquery-3.7.1.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYrzHQHKFwh-P_UYxstd7YZ8fjHW9DhTM"
                    strategy="beforeInteractive"
                />
                <Script
                    src="/lib/jquery.spincrement.min.js"
                    strategy="beforeInteractive"
                />
                <Script id="custom-js" strategy="beforeInteractive">
                    {
                        `
                    function showPopUp() {
                        $("#pop-up-background").css("display", "flex");
                        $("#pop-up-background").on("click", function (e) {
                            const images = $('#pop-up-background img');
                            if (!images.is(e.target) && images.has(e.target).length === 0) {
                                $("#pop-up-background").css("display", "none");
                            }
                        })
                    }
                    `
                    }
                </Script>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Header />
                <main>{children}</main>
                <SpeedInsights />
                <Footer />
            </body>
        </html>
    );
}
