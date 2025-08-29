window.addEventListener('load', () => {
  const start = document.getElementById('start-element');
  const end = document.getElementById('end-element');
  if (start && end) {
    new LeaderLine(start, end, { color: 'orange', endPlug: 'arrow' });
  }
});



function drawLeader({
  
  containerId = 'stage',
  from = { id: 'from', text: '', className: '', style: {} },
  to = { id: 'to', text: '', className: '', style: {} },
  lineOptions = {}
}) {
  // Creates 'from' and 'to' in 'containerId'. Ignores creation if ids already exist and draws a leaderline between them.
  window.addEventListener('load', () => {
    const container = document.getElementById(containerId);
    const elements = { from, to };
    const createdDivs = {};

    for (const key in elements) {
      const { id, text, className, style } = elements[key];
      let el = document.getElementById(id);

      if (!el || !container.contains(el)) {
        el = document.createElement('div');
        el.id = id;
        el.textContent = text;
        el.className = className || 'anchor80-line';
        Object.assign(el.style, {
          position: 'absolute',
          ...style
        });
        container.appendChild(el);
      }

      createdDivs[key] = el;
    }

    new LeaderLine(createdDivs.from, createdDivs.to, lineOptions);
  });
}


