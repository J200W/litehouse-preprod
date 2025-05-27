
export default function TopSection({ noImg=false, backgroundImage, h1, p }) {

    return (
        <section id="top-section" style={{backgroundImage}} className={noImg ? "no-img" : ""}>
            <h1>{h1}</h1>
            <p>{p}</p>
        </section>
    );
}