/**
 * emcc|em++ ${str} --shell-file ${WORK_DIR}/resources/stub/index.html --emrun -o ${WORK_DIR}${PUBLIC_DIR}/wasm/index.wasm
 * Setting targets for project build
 * @type {{output: string, args: [string], empp: string files: [string], command: [string]}[]}
 */
const targets = [
    /*{
        files: ['src/examples/canvas.c'], //Files for compilation
        output: 'canvas', // Output name
        args: ['-s WASM=1'], //Arguments for emscripten
        command: [''], // Extra command like --emrun
    },*/
    /*{
        files: ['src/examples/fibonacci.c'],
        output: 'fibonacci',
        args: [`-O3` , `-s WASM=1`, `-s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]'`, `-s ALLOW_MEMORY_GROWTH=1`, `-s MODULARIZE=1`, `-s 'EXPORT_NAME="fibonacci"'`],
        command: [''],
    },*/
    /*{
        files: ['src/examples/usesdl.c'],
        output: 'sdl',
        outputPath: ``,
        args: [`-O3` , `-s WASM=1`, `-s USE_SDL=2`, `-s USE_SDL_TTF=2`, `--preload-file /var/www/resources/font`],
        command: [''],
    },*/
    /*{
        files: ['src/examples/sprite.c'],
        output: 'sdl',
        outputPath: ``,
        args: [`-O3` , `-s WASM=1`, `-s USE_SDL=2`, `-s USE_SDL_IMAGE=2`, `-s SDL2_IMAGE_FORMATS=["png"]`, `--preload-file /var/www/resources/sprites`],
        command: [''],
    },*/
    /*{
        files: ['src/examples/sprite_animation.c'],
        output: 'sprite',
        outputPath: ``,
        args: [`-O3` , `-s WASM=1`, `-s USE_SDL=2`, `-s USE_SDL_IMAGE=2`, `-s SDL2_IMAGE_FORMATS=["png"]`, `--preload-file /var/www/resources/sprites`],
        command: [''],
    },*/
    /*{
        files: ['src/examples/sprite_move.c'],
        output: 'sprite',
        outputPath: ``,
        args: [`-O3` , `-s WASM=1`, `-s USE_SDL=2`, `-s USE_SDL_IMAGE=2`, `-s SDL2_IMAGE_FORMATS=["png"]`, `--preload-file /var/www/resources/sprites`],
        command: [''],
    },
    {
        files: ['src/examples/game_loop.c'],
        output: 'sprite',
        outputPath: ``,
        args: [`-O3` , `-s WASM=1`, `-s NO_EXIT_RUNTIME=1`, `-s USE_SDL=2`, `-s USE_SDL_IMAGE=2`, `-s SDL2_IMAGE_FORMATS=["png"]`, `-s EXTRA_EXPORTED_RUNTIME_METHODS="['cwrap', 'ccall']"`, `--preload-file /var/www/resources/sprites`],
        command: [''],
    },*/
    {
        files: [
            'src/enemy_ship.cpp',
            'src/game.hpp',
            'src/main.cpp',
            'src/projectile.cpp',
            'src/projectile_pool.cpp',
        ],
        empp: true,
        output: 'game_loop',
        outputPath: ``,
        args: [`-std=c++17`, `-s USER_WEBGL2=1`, `-s USE_SDL=2`, `-s USE_SDL_IMAGE=2`, `-s SDL2_IMAGE_FORMATS=["png"]`,  `--preload-file /var/www/resources/sprites`],
        command: [''],
    }
];

export default targets;