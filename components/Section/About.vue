<template>
    <section class="flex flex-col py-24 bg-neutral-50" id="about">
        <div class="relative flex items-center text-center mb-16">
            <h2 class="text-9xl text-neutral-900 opacity-5 uppercase font-bold w-full mb-0">About Me</h2>
            <p class="text-4xl text-dark font-bold absolute w-full align-self-center leading-tight mb-0">
                Know Me More
                <span class="w-20 border-b-3 border-[var(--ui-primary)] block mx-auto"></span>
            </p>
        </div>

        <UContainer>
            <div class="flex flex-wrap justify-center items-start">
                <div class="lg:w-1/2 w-full flex justify-center">
                    <NuxtImg
                        src="https://placehold.co/800x800/EEE/31343C"
                        :alt="config.fullname"
                        class="max-w-lg max-h-lg"
                    />
                </div>

                <div class="lg:w-1/2 w-full">
                        <p class="leading-7 text-pretty">
                            I am passionate about building high-performance web applications that enhance user experience.
                            With a strong foundation in front-end and back-end technologies, I love turning ideas into reality through clean and efficient code.
                        </p>

                    <div class="mt-4">
                        <h3 class="text-xl text-[var(--ui-text-highlighted)] font-semibold mb-3">Why I Love Coding</h3>
                        <ul class="space-y-2 list-inside">
                            <li>💡 Coding allows me to turn ideas into reality and solve complex problems creatively.</li>
                            <li>📚 It’s a field where learning never stops, and every challenge is an opportunity to grow.</li>
                            <li>🚀 I enjoy writing clean, efficient, and scalable code that enhances user experience and functionality.</li>
                        </ul>
                    </div>

                    <div class="mt-4">
                        <h3 class="text-xl text-[var(--ui-text-highlighted)] font-semibold mb-3">How I Work</h3>
                        <ul class="marker:text-[var(--ui-border-accented)]">
                            <li class="my-1.5 leading-7 [&>ul]:my-0">🛠 Write clean, maintainable code.</li>
                            <li class="my-1.5 leading-7 [&>ul]:my-0">📚 Always learning new technologies.</li>
                            <li class="my-1.5 leading-7 [&>ul]:my-0">🚀 Build fast, fix faster!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
