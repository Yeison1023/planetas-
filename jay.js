
    function updatePlanet() {
      const select = document.getElementById('planet-select');
      const selectedOption = select.options[select.selectedIndex];
      
      const planetName = selectedOption.text.split('.')[1].split('(')[0].trim();
      const gravity = parseFloat(selectedOption.dataset.gravity);
      const accentColor = selectedOption.dataset.color;
      const tagline = selectedOption.dataset.tagline;

      // Actualizar variables de CSS dinámicamente
      document.documentElement.style.setProperty('--accent-color', accentColor);

      // Actualizar textos de la interfaz
      document.getElementById('planet-name').innerText = planetName.toUpperCase();
      document.getElementById('planet-tagline').innerText = tagline;
      document.getElementById('target-planet-label').innerText = planetName.toUpperCase();
      document.getElementById('planet-gravity-display').innerText = `${gravity}G`;

      calculateWeight();
    }

    function calculateWeight() {
      const select = document.getElementById('planet-select');
      const selectedOption = select.options[select.selectedIndex];
      const gravity = parseFloat(selectedOption.dataset.gravity);
      const weight = parseFloat(document.getElementById('user-weight').value) || 0;

      const calculatedWeight = (weight * gravity).toFixed(1);
      const diffPercent = (((calculatedWeight - weight) / weight) * 100).toFixed(1);
      const jumpRatio = (1 / gravity).toFixed(2);

      document.getElementById('final-weight-val').innerText = calculatedWeight;
      document.getElementById('weight-diff-percent').innerText = `${diffPercent}% ${diffPercent < 0 ? 'MÁS LIGERO' : 'MÁS PESADO'}`;
      document.getElementById('jump-height').innerText = `${jumpRatio}× MÁS ALTO`;
    }

    // Inicializar estado por defecto
    updatePlanetTheme();