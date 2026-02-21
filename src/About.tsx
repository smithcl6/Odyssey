import Profile from '/src/assets/profile.jpg';

/**
 * Besides having an image of me, unsure what I want to put here.
 * @returns section of the page that talks about me.
 */
function About() {
    return (
        <section>
            <h2 className='text-theme p-4 font-semibold'>More About Me</h2>
            <div className='bg-color-1 flex flex-col rounded-2xl sm:flex-row'>
                <img
                    className='m-auto max-h-[80vh] rounded-4xl object-scale-down p-4 sm:max-w-1/2'
                    src={Profile}
                />
                <span className='text-theme m-2 rounded-2xl p-4 sm:m-0'>
                    <h4>
                        Professional Stuff Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed nec rhoncus velit.
                        Aenean sit amet dolor vulputate, laoreet lorem non,
                        rhoncus massa. Donec est ante, maximus in lectus sit
                        amet, accumsan lacinia mi. Fusce cursus sapien eu
                        faucibus sollicitudin. Phasellus eget enim vitae risus
                        vehicula euismod. Donec mattis lorem ac tempus
                        fermentum. Nulla facilisi. Aliquam dapibus pulvinar
                        hendrerit. Fusce ipsum libero, ornare in molestie ac,
                        dictum vitae lorem. Nulla vel pretium augue, nec
                        hendrerit sapien.
                    </h4>
                    <br />
                    <h4>Hobbies placeholder</h4>
                </span>
            </div>
        </section>
    );
}

export default About;
