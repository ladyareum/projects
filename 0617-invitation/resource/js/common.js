if (sessionStorage.fontsLoaded) {
    var html = document.documentElement;
    html.classList.add("fonts-loaded")
)} else {
    document.documentElement.classList.add('blocking-time');
    setTimeout(function() {
        document.documentElement.classList.remove('blocking-time');
    }, 400)
    var font = new FontFaceObserver('Nanum Gothic');
    font.load(null, 3000).then(function() {
      document.documentElement.classList.add('fonts-loaded');
      sessionStorage.fontsLoaded = true;
    });
}