function Hero() {
    return (
        <section className="hero flex p-4 pt-20 sm:p-24 bg-cover bg-center h-screen">
            <div className="flex flex-col">
                <h1 className="text-6xl p-2 font-bold text-purple-400 zelda:text-amber-500 mario:text-red-500">Christopher Smith</h1>
                <h2 className="text-4xl p-2 font-semibold text-blue-500">Software Developer</h2>
                <p className="text-2xl p-2 font-medium">
                    I'm a junior developer with full-stack experience, especially in front-end development using Angular and React.
                    With that said, I am still early in my career and am open-minded to areas outside of web dev.
                    In any case, I care about writing clean, maintainable, and scalable code.
                </p>
            </div>
        </section>
    );
}

export default Hero;