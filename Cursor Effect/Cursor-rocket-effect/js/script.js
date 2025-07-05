const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#9D4EDD'];

document.addEventListener('mousemove', (e) => {
    const spark = document.createElement('div');
    spark.className = 'spark';
    spark.style.left = `${e.pageX}px`;
    spark.style.top = `${e.pageY}px`;
    spark.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;
    document.body.appendChild(spark);

    setTimeout(() => {
        spark.remove();
    }, 1000);
});