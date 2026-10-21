// 1. Zastąp poniższe nazwy plikami ze swoimi modelami (.glb / .gltf)
        const models = [
            'kostka.glb',
            'domek.glb',
            'rzym.glb',
          
        ];

        let currentIndex = 0;
        const viewer = document.getElementById('viewer');

        function updateModel() {
            viewer.src = models[currentIndex];
        }

        document.getElementById('nextBtn').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % models.length; // przechodzi do przodu i pętli
            updateModel();
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + models.length) % models.length; // cofa i pętli
            updateModel();
        });