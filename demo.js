// The app's first Campaign level: no reefs or wakes, mirrored horizontal moves.
(() => {
  const demo = document.querySelector('#demo');
  if (!demo) return;
  const status = document.querySelector('#demo-status');
  const controls = [...document.querySelectorAll('[data-move]')];
  const boat =
    '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 5 56 55 32 45 8 55Z" fill="currentColor"/><path d="M32 11v34" stroke="#091421" stroke-opacity=".45" stroke-width="2"/></svg>';
  let a, b, lights, moves;
  const same = (p, q) => p[0] === q[0] && p[1] === q[1];
  const won = () => same(a, [3, 0]) && same(b, [0, 0]) && lights.every(Boolean);
  function draw() {
    [a, b].forEach((position, sea) => {
      const board = document.querySelector(sea ? '#sea-b' : '#sea-a');
      const dock = sea ? [0, 0] : [3, 0],
        light = sea ? [2, 3] : [1, 3];
      board.innerHTML = '';
      for (let y = 0; y < 4; y++)
        for (let x = 0; x < 4; x++) {
          const cell = document.createElement('div');
          cell.className = 'cell';
          cell.setAttribute('aria-hidden', 'true');
          if (same([x, y], dock)) cell.innerHTML += '<span class="harbour"></span>';
          if (same([x, y], light) && !lights[sea]) cell.innerHTML += '<span class="light">◆</span>';
          if (same([x, y], position)) cell.innerHTML += boat;
          board.append(cell);
        }
      board.setAttribute(
        'aria-label',
        `${sea ? 'Amber' : 'Jade'} sea. Boat row ${position[1] + 1}, column ${position[0] + 1}. Harbour row 1, column ${dock[0] + 1}. ${lights[sea] ? 'Light collected.' : `Light row 4, column ${light[0] + 1}.`}`,
      );
    });
    controls.forEach((button) => (button.disabled = won()));
  }
  function reset() {
    a = [0, 3];
    b = [3, 3];
    lights = [false, false];
    moves = 0;
    draw();
    status.textContent = 'Try east →. Both boats move, in opposite directions.';
  }
  function move(direction) {
    if (won()) return;
    const [dx, dy] = { north: [0, -1], east: [1, 0], south: [0, 1], west: [-1, 0] }[direction];
    const step = (p, x) => {
      const next = [p[0] + x, p[1] + dy];
      return next.every((v) => v >= 0 && v < 4) ? next : p;
    };
    const nextA = step(a, dx),
      nextB = step(b, -dx);
    if (same(a, nextA) && same(b, nextB)) {
      status.textContent = 'The edge holds both boats. Try another direction.';
      return;
    }
    a = nextA;
    b = nextB;
    moves++;
    lights[0] ||= same(a, [1, 3]);
    lights[1] ||= same(b, [2, 3]);
    draw();
    status.textContent = won()
      ? `Both boats home in ${moves} moves. ${moves === 6 ? 'That’s the shortest route.' : 'Can you do it in six?'}`
      : lights.every(Boolean)
        ? `${moves} ${moves === 1 ? 'move' : 'moves'} · Both lights collected. Bring the boats to the rings.`
        : `${moves} ${moves === 1 ? 'move' : 'moves'} · Collect both diamonds before reaching the rings.`;
  }
  controls.forEach((button) => button.addEventListener('click', () => move(button.dataset.move)));
  document.querySelector('#reset').addEventListener('click', reset);
  document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey)
      return;
    if (event.target.closest('input, textarea, select, [contenteditable]')) return;
    const direction = {
      ArrowUp: 'north',
      ArrowRight: 'east',
      ArrowDown: 'south',
      ArrowLeft: 'west',
    }[event.key];
    if (!direction || won()) return;
    event.preventDefault();
    move(direction);
  });
  reset();
})();
