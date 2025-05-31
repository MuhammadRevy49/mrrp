export default function Home() {
    return (
        <div id="home" className="relative min-h-screen">
            <div
                className="fixed inset-0 bg-cover bg-center pointer-events-none"
                style={{
                    backgroundImage: "url('/images/bg.jpeg')",
                    opacity: 1,
                    zIndex: -1,
                }}
            />
        </div>
    );
}