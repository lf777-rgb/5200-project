const snapshotData = {
  "2026-02": {
    label: "February 2026",
    categories: [
      {
        key: "bread",
        label: "Bread and cereals",
        value: 142,
        note:
          "This category is central because it tracks staple foods that are close to the most basic household basket.",
        comparator:
          "Compared with a year earlier, this category was up about 142 percent.",
        source: "IranWire summary of SCI February 2026 report"
      },
      {
        key: "oils",
        label: "Cooking oil",
        value: 207,
        note:
          "Cooking oil shows that the shock was not only broad but extreme in some categories.",
        comparator:
          "Compared with a year earlier, this category was up about 207 percent.",
        source: "IranWire summary of SCI February 2026 report"
      },
      {
        key: "meat",
        label: "Meat",
        value: 117,
        note:
          "Protein categories help widen the story from staples to household nutrition pressure.",
        comparator:
          "Compared with a year earlier, this category was up about 117 percent.",
        source: "IranWire summary of SCI February 2026 report"
      },
      {
        key: "fruit",
        label: "Fruit",
        value: 113,
        note:
          "Fruit inflation shows that the squeeze extended beyond cereals and oils.",
        comparator:
          "Compared with a year earlier, this category was up about 113 percent.",
        source: "IranWire summary of SCI February 2026 report"
      },
      {
        key: "dairy",
        label: "Dairy and eggs",
        value: 108,
        note:
          "Dairy and eggs connect the price story to nutrition and everyday family shopping decisions.",
        comparator:
          "Compared with a year earlier, this category was up about 108 percent.",
        source: "IranWire summary of SCI February 2026 report"
      }
    ],
    context: [
      { label: "Food basket", value: 110, color: "var(--red)" },
      { label: "Overall inflation", value: 68.1, color: "var(--green)" },
      { label: "Wage growth ceiling", value: 45, color: "var(--gold)" }
    ]
  },
  "2026-03": {
    label: "March 2026",
    categories: [
      {
        key: "oils",
        label: "Oils and fats",
        value: 219,
        note:
          "Oils and fats became the most dramatic category in the March 2026 snapshot.",
        comparator:
          "Compared with March 2025, this category was up about 219 percent.",
        source: "Iran International summary of SCI March 2026 report"
      },
      {
        key: "bread",
        label: "Bread and cereals",
        value: 140,
        note:
          "Bread and cereals tie the Tehran market evidence to the official national category breakdown.",
        comparator:
          "Compared with March 2025, this category was up about 140 percent.",
        source: "Iran International summary of SCI March 2026 report"
      },
      {
        key: "meat",
        label: "Meat and poultry",
        value: 135,
        note:
          "Meat and poultry show how affordability pressure reached beyond the cheapest foods.",
        comparator:
          "Compared with March 2025, this category was up about 135 percent.",
        source: "Iran International summary of SCI March 2026 report"
      },
      {
        key: "dairy",
        label: "Dairy products",
        value: 116.8,
        note:
          "Dairy inflation helps connect the price story to household nutrition and daily consumption habits.",
        comparator:
          "Compared with March 2025, this category was up about 116.8 percent.",
        source: "Iran International summary of SCI March 2026 report"
      },
      {
        key: "fruit",
        label: "Fruits and nuts",
        value: 104.2,
        note:
          "This category shows that even ordinary produce categories stayed under severe inflation pressure.",
        comparator:
          "Compared with March 2025, this category was up about 104.2 percent.",
        source: "Iran International summary of SCI March 2026 report"
      },
      {
        key: "vegetables",
        label: "Vegetables and legumes",
        value: 46.4,
        note:
          "Vegetables and legumes were still strongly inflationary, but much less so than the categories at the top of the chart.",
        comparator:
          "Compared with March 2025, this category was up about 46.4 percent.",
        source: "Iran International summary of SCI March 2026 report"
      }
    ],
    context: [
      { label: "Food aggregate", value: 112.5, color: "var(--red)" },
      { label: "Overall CPI", value: 71.8, color: "var(--green)" },
      { label: "Non-food and services", value: 50.4, color: "var(--gold)" }
    ]
  }
};

const milestoneFigureData = {
  dates: ["Mar 2025", "Oct 2025", "Feb 2026"],
  rice: [
    { value: 60, label: "60%" },
    { value: 300, label: "300%+" },
    { value: 300, label: "4x level" }
  ],
  flour: [
    { value: 18, label: "18%" },
    { value: 50, label: "50%" },
    { value: 200, label: "200%" }
  ]
};

const tehranMilestones = [
  {
    date: "March 2025",
    title: "Rice begins to sprint",
    body:
      "FAO archive notes indicate Tehran rice prices were already nearly 60 percent above their year-earlier level."
  },
  {
    date: "March 2025",
    title: "Flour pressure is visible early",
    body:
      "The same archive material indicates wheat flour in Tehran was about 18 percent higher year over year."
  },
  {
    date: "June 2025",
    title: "Subsidy changes matter",
    body:
      "FAO country-brief reporting ties higher flour pressure to reduced bakery flour subsidies during June 2025."
  },
  {
    date: "October 2025",
    title: "Rice reaches extreme territory",
    body:
      "FAO country-brief reporting says retail rice in Tehran was more than triple its level a year earlier."
  },
  {
    date: "February 2026",
    title: "Flour hits a visible level",
    body:
      "FAO reported wheat flour at roughly 520,000 Iranian rial per kilogram in the Tehran market."
  },
  {
    date: "March 2026",
    title: "Food outruns the wider economy",
    body:
      "Published summaries of official inflation data showed food inflation far above both overall CPI and non-food services."
  }
];

const basketPresets = {
  staple: {
    name: "Staple-first basket",
    description:
      "A basket that leans heavily on bread and cereals, with smaller shares for dairy, oils, fruit, and meat.",
    weights: {
      bread: 0.42,
      oils: 0.16,
      dairy: 0.16,
      fruit: 0.08,
      meat: 0.18
    }
  },
  balanced: {
    name: "Balanced family basket",
    description:
      "A more even split across staples, dairy, oils, fruit, and protein categories.",
    weights: {
      bread: 0.28,
      oils: 0.12,
      dairy: 0.22,
      fruit: 0.16,
      meat: 0.22
    }
  },
  protein: {
    name: "Protein-heavy basket",
    description:
      "A basket that assumes a larger household emphasis on meat and dairy rather than the cheapest staples.",
    weights: {
      bread: 0.2,
      oils: 0.1,
      dairy: 0.24,
      fruit: 0.12,
      meat: 0.34
    }
  }
};

let activeMonth = "2026-02";
let activeCategory = snapshotData[activeMonth].categories[0].label;
let activeBasketMonth = "2026-02";
let activePreset = "staple";

const monthButtons = document.querySelectorAll("[data-month]");
const basketMonthButtons = document.querySelectorAll("[data-basket-month]");
const presetButtons = document.querySelectorAll("[data-preset]");
const categoryChart = document.getElementById("category-chart");
const contextChart = document.getElementById("context-chart");
const detailTitle = document.getElementById("detail-title");
const detailBody = document.getElementById("detail-body");
const detailMeta = document.getElementById("detail-meta");
const milestoneFigure = document.getElementById("milestone-figure");
const marchFigure = document.getElementById("march-figure");
const timeline = document.getElementById("timeline");
const basketChart = document.getElementById("basket-chart");
const basketTitle = document.getElementById("basket-title");
const basketBody = document.getElementById("basket-body");
const basketTotalValue = document.getElementById("basket-total-value");

function uniqueSeries(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (seen.has(item.label)) {
      return false;
    }
    seen.add(item.label);
    return true;
  });
}

function renderBarRows(container, rows, maxValue, onClick) {
  container.innerHTML = "";

  rows.forEach((row) => {
    const wrapper = document.createElement("div");
    wrapper.className = `bar-row ${row.isActive ? "active" : ""}`.trim();

    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `${row.label}: ${row.value} percent`);

    const meta = document.createElement("div");
    meta.className = "bar-meta";

    const name = document.createElement("span");
    name.className = "bar-name";
    name.textContent = row.label;

    const value = document.createElement("span");
    value.className = "bar-value";
    value.textContent = `${row.value}%`;

    meta.append(name, value);

    const track = document.createElement("div");
    track.className = "bar-track";

    const fill = document.createElement("div");
    fill.className = "bar-fill";
    fill.style.width = `${(row.value / maxValue) * 100}%`;
    if (row.color) {
      fill.style.background = row.color;
    }

    track.appendChild(fill);
    button.append(meta, track);

    if (onClick) {
      button.addEventListener("click", () => onClick(row.label));
    }

    wrapper.appendChild(button);
    container.appendChild(wrapper);
  });
}

function categoryByLabel(snapshot, label) {
  return snapshot.categories.find((item) => item.label === label);
}

function renderCategoryChart() {
  const snapshot = snapshotData[activeMonth];
  const maxValue = Math.max(...snapshot.categories.map((item) => item.value));
  const rows = snapshot.categories.map((item) => ({
    ...item,
    isActive: item.label === activeCategory
  }));

  renderBarRows(categoryChart, rows, maxValue, (label) => {
    activeCategory = label;
    renderLinkedViews();
  });
}

function renderContextChart() {
  const snapshot = snapshotData[activeMonth];
  const selected = categoryByLabel(snapshot, activeCategory);
  const contextRows = uniqueSeries([
    {
      label: selected.label,
      value: selected.value,
      color: "linear-gradient(90deg, var(--red), var(--gold))"
    },
    ...snapshot.context
  ]);
  const maxValue = Math.max(...contextRows.map((item) => item.value));

  renderBarRows(contextChart, contextRows, maxValue);
}

function renderDetail() {
  const snapshot = snapshotData[activeMonth];
  const selected = categoryByLabel(snapshot, activeCategory);

  detailTitle.textContent = selected.label;
  detailBody.textContent = `${selected.note} ${selected.comparator}`;
  detailMeta.textContent = `${snapshot.label} | ${selected.source}`;
}

function svgLinePath(points) {
  return points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");
}

function renderMilestoneFigure() {
  const width = 900;
  const height = 420;
  const margin = { top: 58, right: 74, bottom: 76, left: 92 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const yMax = 340;
  const xStep = innerWidth / (milestoneFigureData.dates.length - 1);

  const scaleY = (value) => margin.top + innerHeight - (value / yMax) * innerHeight;
  const scaleX = (index) => margin.left + index * xStep;

  const ricePoints = milestoneFigureData.rice.map((item, index) => ({
    x: scaleX(index),
    y: scaleY(item.value),
    label: item.label
  }));

  const flourPoints = milestoneFigureData.flour.map((item, index) => ({
    x: scaleX(index),
    y: scaleY(item.value),
    label: item.label
  }));

  let svg = "";

  for (let tick = 0; tick <= yMax; tick += 80) {
    const y = scaleY(tick);
    svg += `<line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" class="svg-grid" />`;
    svg += `<text x="${margin.left - 12}" y="${y + 5}" text-anchor="end" class="svg-axis-label">${tick}%</text>`;
  }

  milestoneFigureData.dates.forEach((date, index) => {
    const x = scaleX(index);
    svg += `<line x1="${x}" y1="${margin.top}" x2="${x}" y2="${height - margin.bottom}" class="svg-grid light" />`;
    svg += `<text x="${x}" y="${height - margin.bottom + 28}" text-anchor="middle" class="svg-axis-label">${date}</text>`;
  });

  svg += `<path d="${svgLinePath(ricePoints)}" class="svg-series rice" />`;
  svg += `<path d="${svgLinePath(flourPoints)}" class="svg-series flour" />`;

  ricePoints.forEach((point, index) => {
    const offsets = [
      { dx: 14, dy: -18, anchor: "start" },
      { dx: 0, dy: -18, anchor: "middle" },
      { dx: 0, dy: -18, anchor: "middle" }
    ];
    const offset = offsets[index];
    svg += `<circle cx="${point.x}" cy="${point.y}" r="6" class="svg-dot rice" />`;
    svg += `<text x="${point.x + offset.dx}" y="${point.y + offset.dy}" text-anchor="${offset.anchor}" class="svg-point-label">${point.label}</text>`;
  });

  flourPoints.forEach((point, index) => {
    const offsets = [
      { dx: 14, dy: -14, anchor: "start" },
      { dx: 0, dy: 30, anchor: "middle" },
      { dx: 0, dy: 30, anchor: "middle" }
    ];
    const offset = offsets[index];
    svg += `<circle cx="${point.x}" cy="${point.y}" r="6" class="svg-dot flour" />`;
    svg += `<text x="${point.x + offset.dx}" y="${point.y + offset.dy}" text-anchor="${offset.anchor}" class="svg-point-label">${point.label}</text>`;
  });

  svg += `<text x="${margin.left}" y="${margin.top - 14}" class="svg-key rice-key">Rice</text>`;
  svg += `<text x="${margin.left + 80}" y="${margin.top - 14}" class="svg-key flour-key">Wheat flour</text>`;

  milestoneFigure.innerHTML = svg;
}

function renderMarchFigure() {
  const categories = [...snapshotData["2026-03"].categories].sort((a, b) => b.value - a.value);
  const width = 900;
  const height = 460;
  const margin = { top: 42, right: 36, bottom: 128, left: 82 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const yMax = 240;
  const barGap = 20;
  const barWidth = (innerWidth - barGap * (categories.length - 1)) / categories.length;
  const scaleY = (value) => margin.top + innerHeight - (value / yMax) * innerHeight;

  let svg = "";

  for (let tick = 0; tick <= yMax; tick += 60) {
    const y = scaleY(tick);
    svg += `<line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" class="svg-grid" />`;
    svg += `<text x="${margin.left - 12}" y="${y + 5}" text-anchor="end" class="svg-axis-label">${tick}%</text>`;
  }

  categories.forEach((category, index) => {
    const x = margin.left + index * (barWidth + barGap);
    const y = scaleY(category.value);
    const barHeight = margin.top + innerHeight - y;

    svg += `<rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="6" class="svg-bar" />`;
    svg += `<text x="${x + barWidth / 2}" y="${y - 10}" text-anchor="middle" class="svg-point-label">${category.value}%</text>`;
    const words = category.label.split(" ");
    const lines = words.length > 2 ? [words.slice(0, 2).join(" "), words.slice(2).join(" ")] : [category.label];
    svg += `<text x="${x + barWidth / 2}" y="${height - margin.bottom + 26}" text-anchor="middle" class="svg-axis-label">`;
    lines.forEach((line, lineIndex) => {
      svg += `<tspan x="${x + barWidth / 2}" dy="${lineIndex === 0 ? 0 : 18}">${line}</tspan>`;
    });
    svg += `</text>`;
  });

  marchFigure.innerHTML = svg;
}

function renderTimeline() {
  timeline.innerHTML = "";
  tehranMilestones.forEach((item) => {
    const card = document.createElement("article");
    card.className = "timeline-card";

    const date = document.createElement("p");
    date.className = "timeline-date";
    date.textContent = item.date;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const body = document.createElement("p");
    body.textContent = item.body;

    card.append(date, title, body);
    timeline.appendChild(card);
  });
}

function syncMonthButtons() {
  monthButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.month === activeMonth);
  });
}

function syncBasketButtons() {
  basketMonthButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.basketMonth === activeBasketMonth);
  });

  presetButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.preset === activePreset);
  });
}

function renderLinkedViews() {
  renderCategoryChart();
  renderContextChart();
  renderDetail();
  syncMonthButtons();
}

function basketSeries(monthKey) {
  const snapshot = snapshotData[monthKey];
  const map = {};
  snapshot.categories.forEach((category) => {
    map[category.key] = category.value;
  });
  return map;
}

function renderBasketChart() {
  const preset = basketPresets[activePreset];
  const series = basketSeries(activeBasketMonth);
  const rows = Object.entries(preset.weights).map(([key, weight]) => {
    const value = series[key];
    const contribution = Number((weight * value).toFixed(1));
    const labelMap = {
      bread: "Bread and cereals",
      oils: "Oils",
      dairy: "Dairy",
      fruit: "Fruit",
      meat: "Meat"
    };

    return {
      label: labelMap[key],
      value: contribution,
      rawValue: value
    };
  });

  const maxValue = Math.max(...rows.map((row) => row.value));

  basketChart.innerHTML = "";
  rows.forEach((row) => {
    const wrapper = document.createElement("div");
    wrapper.className = "bar-row";

    const meta = document.createElement("div");
    meta.className = "bar-meta";

    const name = document.createElement("span");
    name.className = "bar-name";
    name.textContent = `${row.label} contribution`;

    const value = document.createElement("span");
    value.className = "bar-value";
    value.textContent = `${row.value} index points`;

    meta.append(name, value);

    const track = document.createElement("div");
    track.className = "bar-track";

    const fill = document.createElement("div");
    fill.className = "bar-fill";
    fill.style.width = `${(row.value / maxValue) * 100}%`;

    track.appendChild(fill);
    wrapper.append(meta, track);
    basketChart.appendChild(wrapper);
  });

  const totalIncrease = rows.reduce((sum, row) => sum + row.value, 0);
  const totalIndex = Number((100 + totalIncrease).toFixed(1));

  basketTitle.textContent = preset.name;
  basketBody.textContent = `${preset.description} In ${snapshotData[activeBasketMonth].label}, this illustrative basket lands around ${totalIndex} on a March 2025 baseline of 100.`;
  basketTotalValue.textContent = totalIndex.toFixed(1);

  syncBasketButtons();
}

monthButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeMonth = button.dataset.month;
    activeCategory = snapshotData[activeMonth].categories[0].label;
    renderLinkedViews();
  });
});

basketMonthButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeBasketMonth = button.dataset.basketMonth;
    renderBasketChart();
  });
});

presetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activePreset = button.dataset.preset;
    renderBasketChart();
  });
});

renderMilestoneFigure();
renderMarchFigure();
renderTimeline();
renderLinkedViews();
renderBasketChart();
