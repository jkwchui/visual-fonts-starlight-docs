document.addEventListener('DOMContentLoaded', function() {
    const toggleJyutping = document.getElementById('toggleJyutping');
    const lyricsContainer = document.getElementById('lyricsContainer');

    toggleJyutping.addEventListener('click', function() {
        lyricsContainer.classList.toggle('lyrics_zh');
        lyricsContainer.classList.toggle('lyrics_zh-no-jyutping');
    });
});
