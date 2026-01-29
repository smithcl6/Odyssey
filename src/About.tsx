import Profile from '/src/assets/profile.jpg';

function About() {
    return (
        <section>
            <h2 className='text-theme p-4 font-semibold'>More About Me</h2>
            <div className='flex flex-col sm:flex-row'>
                <img
                    className='w-full rounded-4xl object-scale-down p-4 sm:w-1/2'
                    src={Profile}
                />
                <p className='text-theme p-4 sm:w-1/2'>
                    Personal Stuff Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed nec rhoncus velit. Aenean sit amet
                    dolor vulputate, laoreet lorem non, rhoncus massa. Donec est
                    ante, maximus in lectus sit amet, accumsan lacinia mi. Fusce
                    cursus sapien eu faucibus sollicitudin. Phasellus eget enim
                    vitae risus vehicula euismod. Donec mattis lorem ac tempus
                    fermentum. Nulla facilisi. Aliquam dapibus pulvinar
                    hendrerit. Fusce ipsum libero, ornare in molestie ac, dictum
                    vitae lorem. Nulla vel pretium augue, nec hendrerit sapien.
                </p>
            </div>
        </section>
    );
}

export default About;
