import TopSection from "app/(components)/top-section";

export default function About() {
    return (
        <div id="main-content" className="about-page">
            <TopSection
                noImg={true}
                backgroundImage={''}
                h1={"About Lite House"}
                p={''} />

            <center style={{marginTop: "5rem"}}>
                <h1>
                    IN DEVELOPMENT...
                </h1>
            </center>
        </div>
    );
}