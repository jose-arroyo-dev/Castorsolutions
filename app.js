const navigationItems = [
  { id: "dashboard", label: "Resumen", icon: "⌂", group: "RESUMEN" },
  { id: "clients", label: "Clientes", icon: "♙" },
  { id: "quotes", label: "Cotizaciones", icon: "▤", badge: "3" },
  { id: "sales", label: "Ventas y órdenes", icon: "↗" },
  { id: "inventory", label: "Inventario", icon: "▦", badge: "2" },
  { id: "materials", label: "Materiales", icon: "▧" },
  { id: "suppliers", label: "Proveedores", icon: "♧" },
  { id: "purchases", label: "Compras", icon: "⇧" },
  { id: "shipments", label: "Envíos", icon: "⇢" },
  { id: "accounting", label: "Contabilidad", icon: "＄" },
  { id: "invoicing", label: "Facturación", icon: "▣" }
];

const moduleInfo = {
  clients: { title: "Clientes", singular: "cliente", description: "Administra la información y el historial de tus clientes.", columns: [["name", "Cliente"], ["identification", "Identificación"], ["phone", "Teléfono"], ["email", "Correo"], ["location", "Ubicación"], ["status", "Estado"]], fields: [["name", "Nombre completo", "text", true], ["identification", "Identificación", "text", true], ["phone", "Teléfono", "tel"], ["email", "Correo electrónico", "email"], ["location", "Ubicación", "text"], ["notes", "Notas", "textarea"]] },
  quotes: { title: "Cotizaciones", singular: "cotización", description: "Prepara presupuestos y registra los datos de instalación del proyecto.", columns: [["number", "N.º cotización"], ["client", "Cliente"], ["project", "Proyecto"], ["date", "Fecha"], ["total", "Total"], ["status", "Estado"]], fields: [["client", "Cliente", "select", true, "clientOptions"], ["project", "Tipo de proyecto", "select", true, ["Techo residencial", "Techo comercial", "Cubierta para terraza", "Reparación", "Otro"]], ["area", "Área aproximada (m²)", "number", true], ["material", "Material principal", "select", true, "materialOptions"], ["accessories", "Accesorios o servicios", "text"], ["installation", "Datos de instalación", "textarea"], ["validDays", "Vigencia (días)", "select", false, ["15 días", "30 días", "45 días"]]], total: true },
  sales: { title: "Ventas y órdenes", singular: "venta", description: "Da seguimiento a las órdenes desde la cotización hasta la entrega.", columns: [["number", "N.º orden"], ["client", "Cliente"], ["date", "Fecha"], ["total", "Total"], ["payment", "Condición de pago"], ["status", "Estado"]], fields: [["client", "Cliente", "select", true, "clientOptions"], ["quote", "Referencia de cotización", "text"], ["material", "Material", "select", true, "materialOptions"], ["quantity", "Cantidad", "number", true], ["tax", "Impuestos (₡)", "number"], ["total", "Total de la venta (₡)", "number", true], ["payment", "Condición de pago", "select", true, ["Contado", "Apartado 10 %", "Crédito", "Transferencia"]], ["reserveDays", "Plazo del apartado", "select", false, ["15 días", "30 días"]], ["status", "Estado", "select", false, ["Pendiente", "Confirmada", "Preparando", "Enviada", "Entregada"]], ["notes", "Notas", "textarea"]] },
  inventory: { title: "Inventario", singular: "movimiento", description: "Controla producto disponible, reservado, de segunda y en reposición.", columns: [["material", "Material"], ["sku", "Código"], ["available", "Disponible"], ["reserved", "Reservado"], ["second", "Segunda calidad"], ["reorder", "Punto de reorden"], ["status", "Estado"]], fields: [["material", "Material", "select", true, "materialOptions"], ["available", "Unidades disponibles", "number", true], ["reserved", "Unidades reservadas", "number", true], ["second", "Segunda calidad", "number"], ["leadTime", "Tiempo de importación (días)", "number"], ["safetyDays", "Días de stock de seguridad", "number"]] },
  materials: { title: "Materiales", singular: "material", description: "Mantén el catálogo de productos, precios y especificaciones al día.", columns: [["name", "Material"], ["sku", "Código"], ["category", "Categoría"], ["price", "Precio unitario"], ["unit", "Unidad"], ["status", "Estado"]], fields: [["name", "Nombre del material", "text", true], ["sku", "Código / SKU", "text", true], ["category", "Categoría", "select", true, ["Cubiertas", "Estructura", "Aislamiento", "Tornillería", "Accesorios", "Otros"]], ["price", "Precio unitario (₡)", "number", true], ["unit", "Unidad", "select", true, ["m²", "unidad", "metro", "paquete", "lámina"]], ["specifications", "Especificaciones", "textarea"]] },
  suppliers: { title: "Proveedores", singular: "proveedor", description: "Consulta proveedores, contactos y condiciones comerciales.", columns: [["name", "Proveedor"], ["country", "País"], ["contact", "Contacto"], ["email", "Correo"], ["terms", "Condiciones"], ["status", "Estado"]], fields: [["name", "Nombre del proveedor", "text", true], ["country", "País", "text", true], ["contact", "Persona de contacto", "text"], ["email", "Correo electrónico", "email"], ["terms", "Condiciones comerciales", "text"], ["leadTime", "Tránsito estimado (días)", "number"]] },
  purchases: { title: "Compras", singular: "orden de compra", description: "Registra y monitorea las compras nacionales e internacionales.", columns: [["number", "N.º orden"], ["supplier", "Proveedor"], ["date", "Fecha"], ["arrival", "Llegada estimada"], ["tracking", "Tracking"], ["total", "Total"], ["status", "Estado"]], fields: [["supplier", "Proveedor", "select", true, "supplierOptions"], ["date", "Fecha de compra", "date", true], ["arrival", "Llegada estimada", "date"], ["tracking", "Número de tracking", "text"], ["total", "Total (₡)", "number"], ["status", "Estado", "select", false, ["Solicitada", "En tránsito", "En aduana", "Recibida"]], ["notes", "Notas de seguimiento", "textarea"]] },
  shipments: { title: "Envíos", singular: "envío", description: "Coordina las entregas y da seguimiento a cada pedido del cliente.", columns: [["number", "N.º envío"], ["client", "Cliente"], ["address", "Dirección"], ["date", "Fecha programada"], ["delivery", "Modalidad"], ["status", "Estado"]], fields: [["client", "Cliente", "select", true, "clientOptions"], ["address", "Dirección de entrega", "text", true], ["date", "Fecha de entrega", "date"], ["delivery", "Modalidad", "select", true, ["Mismo día", "Día siguiente", "Hasta en 3 días", "Programada"]], ["status", "Estado", "select", false, ["Pendiente", "Preparando", "En ruta", "Entregado"]], ["notes", "Notas para logística", "textarea"]] },
  accounting: { title: "Contabilidad", singular: "movimiento contable", description: "Registra ingresos y egresos para dar seguimiento al negocio.", columns: [["date", "Fecha"], ["type", "Tipo"], ["description", "Descripción"], ["category", "Categoría"], ["amount", "Monto"], ["method", "Método"]], fields: [["date", "Fecha", "date", true], ["type", "Tipo de movimiento", "select", true, ["Ingreso", "Egreso"]], ["description", "Descripción", "text", true], ["category", "Categoría", "select", false, ["Ventas", "Compra de materiales", "Importación", "Transporte", "Operación", "Otro"]], ["amount", "Monto (₡)", "number", true], ["method", "Método de pago", "select", false, ["Transferencia", "Efectivo", "Tarjeta", "Otro"]]] },
  invoicing: { title: "Facturación electrónica", singular: "venta para exportación", description: "Exporta datos de ventas para cargar en tu plataforma de facturación externa.", columns: [["number", "N.º venta"], ["client", "Cliente"], ["identification", "Identificación"], ["date", "Fecha"], ["total", "Total"], ["status", "Exportación"]], fields: [] }
};

const seed = {
  clients: [
    { id: "c1", name: "María Fernanda Rojas", identification: "1-1245-0832", phone: "8881-2045", email: "maria.rojas@email.com", location: "Santa Ana", status: "Activo" },
    { id: "c2", name: "Constructora Horizonte", identification: "3-101-889234", phone: "2208-4160", email: "compras@horizonte.cr", location: "Escazú", status: "Activo" },
    { id: "c3", name: "Andrés Salazar Mora", identification: "1-0892-0641", phone: "8704-1190", email: "asalazar@email.com", location: "Heredia", status: "Activo" },
    { id: "c4", name: "Desarrollos La Arboleda", identification: "3-102-451091", phone: "2293-0755", email: "proyectos@arboleda.cr", location: "Alajuela", status: "Activo" }
  ],
  quotes: [
    { id: "q1", number: "COT-0024", client: "María Fernanda Rojas", project: "Techo residencial", date: "Hoy", total: 1285000, status: "Pendiente", area: 85, material: "Cubierta termoacústica", installation: "San Rafael de Escazú" },
    { id: "q2", number: "COT-0023", client: "Constructora Horizonte", project: "Techo comercial", date: "Ayer", total: 3470000, status: "Aprobada", area: 230, material: "Lámina esmaltada" },
    { id: "q3", number: "COT-0022", client: "Andrés Salazar Mora", project: "Cubierta para terraza", date: "24 oct 2026", total: 645000, status: "Pendiente", area: 42, material: "Policarbonato alveolar" }
  ],
  sales: [
    { id: "s1", number: "VTA-0018", client: "Desarrollos La Arboleda", date: "28 oct 2026", total: 2460000, payment: "Apartado 10 %", status: "Confirmada" },
    { id: "s2", number: "VTA-0017", client: "María Fernanda Rojas", date: "27 oct 2026", total: 985000, payment: "Transferencia", status: "Preparando" },
    { id: "s3", number: "VTA-0016", client: "Constructora Horizonte", date: "26 oct 2026", total: 1740000, payment: "Contado", status: "Entregada" }
  ],
  inventory: [
    { id: "i1", material: "Cubierta termoacústica", sku: "CUB-001", available: 184, reserved: 72, second: 6, reorder: 120, leadTime: 60, safetyDays: 20, status: "Bajo reorden" },
    { id: "i2", material: "Lámina esmaltada", sku: "LAM-014", available: 342, reserved: 40, second: 8, reorder: 100, leadTime: 45, safetyDays: 15, status: "Disponible" },
    { id: "i3", material: "Policarbonato alveolar", sku: "POL-008", available: 56, reserved: 32, second: 2, reorder: 70, leadTime: 75, safetyDays: 25, status: "Bajo reorden" },
    { id: "i4", material: "Tornillo autoperforante", sku: "TOR-003", available: 1280, reserved: 200, second: 0, reorder: 500, leadTime: 30, safetyDays: 10, status: "Disponible" }
  ],
  materials: [
    { id: "m1", name: "Cubierta termoacústica", sku: "CUB-001", category: "Cubiertas", price: 15100, unit: "m²", status: "Activo" },
    { id: "m2", name: "Lámina esmaltada", sku: "LAM-014", category: "Cubiertas", price: 9800, unit: "m²", status: "Activo" },
    { id: "m3", name: "Policarbonato alveolar", sku: "POL-008", category: "Cubiertas", price: 17800, unit: "m²", status: "Activo" },
    { id: "m4", name: "Tornillo autoperforante", sku: "TOR-003", category: "Tornillería", price: 95, unit: "unidad", status: "Activo" }
  ],
  suppliers: [
    { id: "p1", name: "RoofTech International", country: "Estados Unidos", contact: "James Miller", email: "sales@rooftech.example", terms: "30 % anticipo · 70 % contra entrega", status: "Activo" },
    { id: "p2", name: "Cubiertas del Valle", country: "Costa Rica", contact: "Daniela Vargas", email: "ventas@cubiertas.example", terms: "Crédito a 30 días", status: "Activo" },
    { id: "p3", name: "PolyBuild Global", country: "México", contact: "Luis Herrera", email: "export@polybuild.example", terms: "Transferencia anticipada", status: "Activo" }
  ],
  purchases: [
    { id: "purch1", number: "OC-0042", supplier: "RoofTech International", date: "12 oct 2026", arrival: "18 dic 2026", tracking: "RT-CR-84920", total: 5800000, status: "En tránsito" },
    { id: "purch2", number: "OC-0041", supplier: "Cubiertas del Valle", date: "20 oct 2026", arrival: "02 nov 2026", tracking: "CR-77201", total: 1240000, status: "Solicitada" }
  ],
  shipments: [
    { id: "sh1", number: "ENV-0013", client: "Desarrollos La Arboleda", address: "San Rafael, Alajuela", date: "29 oct 2026", delivery: "Día siguiente", status: "Preparando" },
    { id: "sh2", number: "ENV-0012", client: "Constructora Horizonte", address: "Guachipelín, Escazú", date: "30 oct 2026", delivery: "Programada", status: "Pendiente" },
    { id: "sh3", number: "ENV-0011", client: "Andrés Salazar Mora", address: "Mercedes, Heredia", date: "27 oct 2026", delivery: "Mismo día", status: "Entregado" }
  ],
  accounting: [
    { id: "a1", date: "28 oct 2026", type: "Ingreso", description: "Venta VTA-0018 · La Arboleda", category: "Ventas", amount: 2460000, method: "Transferencia" },
    { id: "a2", date: "27 oct 2026", type: "Egreso", description: "Flete internacional · OC-0042", category: "Importación", amount: 385000, method: "Transferencia" },
    { id: "a3", date: "26 oct 2026", type: "Ingreso", description: "Venta VTA-0016 · Horizonte", category: "Ventas", amount: 1740000, method: "Transferencia" }
  ]
};

const headings = { dashboard: "Resumen", clients: "Clientes", quotes: "Cotizaciones", sales: "Ventas y órdenes", inventory: "Inventario", materials: "Materiales", suppliers: "Proveedores", purchases: "Compras", shipments: "Envíos", accounting: "Contabilidad", invoicing: "Facturación" };
const roleRules = {
  Propietario: ["dashboard", "clients", "quotes", "sales", "inventory", "materials", "suppliers", "purchases", "shipments", "accounting", "invoicing"],
  Vendedor: ["dashboard", "clients", "quotes", "sales", "materials", "shipments"],
  Logística: ["dashboard", "inventory", "materials", "purchases", "shipments"]
};
const roleNames = { Propietario: "María A.", Vendedor: "Sofía V.", Logística: "Carlos L." };
const app = { page: "dashboard", role: localStorage.getItem("castorRole") || "Propietario", search: "", editingId: null };
let records = loadRecords();

function loadRecords() {
  try {
    const stored = JSON.parse(localStorage.getItem("castorRecords"));
    if (stored && typeof stored === "object") return { ...structuredClone(seed), ...stored };
  } catch (error) {
    console.error("No se pudieron leer los datos guardados.", error);
    toast("No se pudieron leer los datos locales. Se mostrarán datos de ejemplo.");
  }
  return structuredClone(seed);
}
function saveRecords() {
  try {
    localStorage.setItem("castorRecords", JSON.stringify(records));
  } catch (error) {
    console.error("No se pudieron guardar los cambios.", error);
    toast("No se pudo guardar. Comprueba el espacio disponible en el navegador.");
  }
}
function formatMoney(value) {
  return new Intl.NumberFormat("es-CR", { style: "currency", currency: "CRC", maximumFractionDigits: 0 }).format(Number(value) || 0);
}
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}
function getClientOptions() { return records.clients.map((client) => client.name); }
function getMaterialOptions() { return records.materials.map((material) => material.name); }
function getSupplierOptions() { return records.suppliers.map((supplier) => supplier.name); }

function renderNavigation() {
  const allowed = roleRules[app.role];
  document.getElementById("navigation").innerHTML = navigationItems.filter((item) => allowed.includes(item.id)).map((item) => {
    const group = item.group ? `<div class="workspace-label nav-group">${item.group}</div>` : "";
    return `${group}<button type="button" class="nav-item ${app.page === item.id ? "active" : ""}" data-page="${item.id}"><span class="nav-icon">${item.icon}</span><span>${item.label}</span>${item.badge && item.id === "inventory" ? `<span class="nav-badge">${lowStockCount()}</span>` : item.badge ? `<span class="nav-badge">${item.badge}</span>` : ""}</button>`;
  }).join("");
  document.getElementById("navigation").querySelectorAll("[data-page]").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.page)));
}
function lowStockCount() { return records.inventory.filter((item) => Number(item.available) <= Number(item.reorder)).length; }
function navigate(page) {
  if (!roleRules[app.role].includes(page)) {
    toast("Este perfil no tiene acceso a ese módulo.");
    return;
  }
  app.page = page;
  app.search = "";
  document.getElementById("sidebar").classList.remove("open");
  render();
}
function pageHeading(title, description, buttonLabel, action) {
  return `<div class="page-heading"><div><span class="eyebrow">CASTOR SOLUCIONES</span><h1>${title}</h1><p>${description}</p></div><div>${buttonLabel ? `<button class="button button-primary" data-action="${action}"><span>＋</span>${buttonLabel}</button>` : `<span class="heading-date"><span>◷</span> Miércoles, 28 de octubre de 2026</span>`}</div></div>`;
}
function renderDashboard() {
  const sales = records.sales.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const reserved = records.inventory.reduce((sum, item) => sum + Number(item.reserved || 0), 0);
  const pendingQuotes = records.quotes.filter((quote) => quote.status === "Pendiente").length;
  const lowStock = lowStockCount();
  const isLogistics = app.role === "Logística";
  const stats = isLogistics
    ? [
      statCard("Unidades disponibles", records.inventory.reduce((sum, item) => sum + Number(item.available || 0), 0).toLocaleString("es-CR"), "Stock físico", "unidades para venta", "▦", ""),
      statCard("Unidades reservadas", reserved.toLocaleString("es-CR"), "Apartados vigentes", "protegidos del stock disponible", "♙", "blue"),
      statCard("Materiales por reorden", lowStock, lowStock ? "Revisar existencias" : "Stock saludable", "según punto de reorden", "⚑", "red"),
      statCard("Envíos pendientes", records.shipments.filter((item) => item.status !== "Entregado").length, "En preparación", "requieren seguimiento", "⇢", "orange")
    ].join("")
    : [
      statCard("Ventas registradas", formatMoney(sales), "↗ 12.8%", "vs. periodo anterior", "↗", ""),
      statCard("Cotizaciones activas", pendingQuotes, "En seguimiento", "requieren atención", "▤", "orange"),
      statCard("Unidades reservadas", reserved.toLocaleString("es-CR"), "Apartados vigentes", "protegidos del stock disponible", "▦", "blue"),
      statCard("Materiales por reorden", lowStock, lowStock ? "Revisar existencias" : "Stock saludable", "según punto de reorden", "⚑", "red")
    ].join("");
  const quickActions = [
    { module: "quotes", icon: "＋", title: "Nueva cotización", caption: "Prepara un presupuesto", action: "new-quote", color: "" },
    { module: "clients", icon: "♙", title: "Agregar cliente", caption: "Registra un cliente nuevo", action: "new-client", color: "blue" },
    { module: "inventory", icon: "▦", title: "Ajustar inventario", caption: "Actualiza las existencias", action: "new-inventory", color: "orange" },
    { module: "purchases", icon: "⇧", title: "Crear orden de compra", caption: "Solicita producto", action: "new-purchase", color: "" }
  ].filter((item) => roleRules[app.role].includes(item.module)).map((item) => quickAction(item.icon, item.title, item.caption, item.action, item.color)).join("");
  const activityPanel = isLogistics
    ? `<div class="panel table-panel"><div class="panel-heading"><div><h2>Órdenes de compra en tránsito</h2><p>Seguimiento de abastecimiento</p></div><button class="text-link" data-action="view-purchases">Ver compras →</button></div><div class="table-scroll">${tableMarkup(["ORDEN", "PROVEEDOR", "LLEGADA ESTIMADA", "TRACKING", "ESTADO"], records.purchases.map((item) => [cell(item.number), item.supplier, item.arrival || "Por confirmar", item.tracking || "—", statusMarkup(item.status)]))}</div></div>`
    : `<article class="panel"><div class="panel-heading"><div><h2>Actividad de ventas</h2><p>Seguimiento de ventas registradas</p></div><div class="chart-legend"><span class="legend-item"><i class="legend-dot"></i>Este mes</span><span class="legend-item"><i class="legend-dot muted"></i>Mes anterior</span></div></div>${salesChart()}</article>`;
  const recentPanel = isLogistics
    ? ""
    : `<article class="panel table-panel"><div class="panel-heading"><div><h2>Cotizaciones recientes</h2><p>Última actividad comercial</p></div><button class="text-link" data-action="view-quotes">Ver todas →</button></div><div class="table-scroll">${tableMarkup(["COTIZACIÓN", "CLIENTE", "PROYECTO", "TOTAL", "ESTADO"], records.quotes.slice(0, 3).map((q) => [cell(q.number, q.date), q.client, q.project, formatMoney(q.total), statusMarkup(q.status)]))}</div></article>`;
  const aiPanel = app.role === "Propietario"
    ? `<article class="panel ai-card"><span class="eyebrow">✦ ASISTENTE INTELIGENTE</span><h2>Una operación más inteligente</h2><p>Revisa sugerencias de reabastecimiento basadas en tus existencias y órdenes en tránsito.</p><button class="button" data-action="ai-suggestions">Ver sugerencias <span>→</span></button></article>`
    : `<article class="panel"><div class="panel-heading"><div><h2>Seguimiento de entregas</h2><p>Próximos pedidos programados</p></div><button class="text-link" data-action="view-shipments">Ver envíos →</button></div><div class="alert-list">${records.shipments.filter((item) => item.status !== "Entregado").slice(0, 3).map((item) => `<div class="alert-row"><span class="alert-mark">⇢</span><div class="alert-copy"><strong>${escapeHTML(item.number)} · ${escapeHTML(item.date || "Fecha por confirmar")}</strong><span>${escapeHTML(item.delivery)} · ${escapeHTML(item.status)}</span></div></div>`).join("") || `<div class="alert-copy"><strong>No hay entregas pendientes.</strong></div>`}</div></article>`;
  return `${pageHeading(`Buenos días, ${roleNames[app.role].split(" ")[0]}`, "Aquí tienes el resumen de la operación de tu negocio.", null, null)}
    <section class="stats-grid">${stats}</section>
    <section class="dashboard-grid">${activityPanel}<article class="panel"><div class="panel-heading"><div><h2>Accesos rápidos</h2><p>Atajos para las tareas frecuentes</p></div></div><div class="quick-actions">${quickActions || `<div class="empty-state">No hay atajos disponibles.</div>`}</div></article></section>
    <section class="dashboard-grid">${recentPanel}<article class="panel"><div class="panel-heading"><div><h2>Alertas operativas</h2><p>Elementos que necesitan atención</p></div></div><div class="alert-list">${lowStock ? `<div class="alert-row"><span class="alert-mark">↗</span><div class="alert-copy"><strong>${lowStock} materiales bajo el punto de reorden</strong><span>Revisa las sugerencias para evitar quiebres de stock.</span></div></div>` : ""}<div class="alert-row"><span class="alert-mark red">◷</span><div class="alert-copy"><strong>Orden internacional en tránsito</strong><span>OC-0042 · RoofTech International · llegada estimada 18 dic.</span></div></div>${!isLogistics ? `<div class="alert-row"><span class="alert-mark">◉</span><div class="alert-copy"><strong>${pendingQuotes} cotizaciones por revisar</strong><span>Da seguimiento para no perder oportunidades.</span></div></div>` : ""}</div></article></section>
    <section class="bottom-grid"><article class="panel"><div class="panel-heading"><div><h2>Próximas entregas</h2><p>Pedidos próximos a salir</p></div><button class="text-link" data-action="view-shipments">Ver envíos →</button></div><div class="table-scroll">${tableMarkup(["ENVÍO", "CLIENTE", "ENTREGA", "MODALIDAD", "ESTADO"], records.shipments.slice(0, 3).map((s) => [cell(s.number), s.client, s.date, s.delivery, statusMarkup(s.status)]))}</div></article>${aiPanel}</section>`;
}
function statCard(label, value, change, foot, icon, color) {
  return `<article class="stat-card"><div class="stat-top"><span>${label}</span><span class="stat-icon ${color}">${icon}</span></div><div class="stat-value">${value}</div><div class="stat-foot"><span class="stat-change ${color === "red" || color === "orange" ? "warn" : ""}">${change}</span><span>${foot}</span></div></article>`;
}
function quickAction(icon, title, caption, action, color) {
  return `<button class="quick-action" data-action="${action}"><span class="quick-action-icon ${color}">${icon}</span><span class="quick-action-copy"><strong>${title}</strong><span>${caption}</span></span><span class="quick-arrow">›</span></button>`;
}
function salesChart() {
  const values = [38, 48, 41, 58, 52, 70, 63, 86, 75, 96, 82, 105];
  const points = values.map((value, index) => `${28 + index * 50},${143 - value}`).join(" ");
  const area = `28,146 ${points} 578,146`;
  const bars = Array.from({ length: 12 }, (_, i) => `<rect class="chart-bar" x="${30 + i * 50}" y="${145 - (i % 3) * 11 - 25}" width="12" height="${25 + (i % 3) * 11}" rx="3"/>`).join("");
  return `<div class="chart-wrap"><svg viewBox="0 0 600 170" preserveAspectRatio="none" role="img" aria-label="Gráfico ilustrativo de actividad de ventas por semana"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#6e9b71" stop-opacity=".2"/><stop offset="100%" stop-color="#6e9b71" stop-opacity="0"/></linearGradient></defs><line class="chart-grid" x1="25" y1="35" x2="590" y2="35"/><line class="chart-grid" x1="25" y1="75" x2="590" y2="75"/><line class="chart-grid" x1="25" y1="115" x2="590" y2="115"/><line class="chart-grid" x1="25" y1="147" x2="590" y2="147"/>${bars}<polygon class="chart-area" points="${area}"/><polyline class="chart-line" points="${points}"/><text class="chart-label" x="27" y="165">Sem 1</text><text class="chart-label" x="163" y="165">Sem 2</text><text class="chart-label" x="306" y="165">Sem 3</text><text class="chart-label" x="453" y="165">Sem 4</text><text class="chart-label" x="552" y="165">Hoy</text></svg></div>`;
}
function cell(primary, secondary = "") {
  return `<span class="cell-strong">${escapeHTML(primary)}</span>${secondary ? `<span class="cell-sub">${escapeHTML(secondary)}</span>` : ""}`;
}
function statusMarkup(value) {
  const key = String(value || "").toLowerCase();
  let style = "";
  if (/pendiente|bajo|aduana|reorden|cancelad|egreso/.test(key)) style = "warning";
  if (/vencid|agotad|error|rechaz/.test(key)) style = "danger";
  if (/entregad|inactiv|solicitad/.test(key)) style = "neutral";
  return `<span class="status ${style}">${escapeHTML(value || "Activo")}</span>`;
}
function tableMarkup(headers, rows, emptyMessage = "Aún no hay registros.") {
  if (!rows.length) return `<div class="empty-state"><strong>Sin resultados</strong>${emptyMessage}</div>`;
  return `<table class="data-table"><thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((value) => `<td>${value ?? "—"}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}
function renderModule(page) {
  const info = moduleInfo[page];
  if (page === "invoicing") return renderInvoicing();
  const createLabel = page === "quotes" || page === "sales" ? "Nueva" : "Nuevo";
  return `${pageHeading(info.title, info.description, `${createLabel} ${info.singular}`, `new-${page}`)}
    ${page === "inventory" ? `<section class="stats-grid">${statCard("Disponible para venta", records.inventory.reduce((sum, item) => sum + Number(item.available || 0), 0).toLocaleString("es-CR"), "Stock físico", "excluye las unidades apartadas", "▦", "")}${statCard("Unidades apartadas", records.inventory.reduce((sum, item) => sum + Number(item.reserved || 0), 0).toLocaleString("es-CR"), "Protegidas", "no se ofrecen a otros clientes", "♙", "blue")}${statCard("Segunda calidad", records.inventory.reduce((sum, item) => sum + Number(item.second || 0), 0).toLocaleString("es-CR"), "Clasificadas aparte", "no suman al stock de venta", "◈", "orange")}${statCard("Materiales por reorden", lowStockCount(), "Punto de reorden", "requieren revisión", "↗", "red")}</section>` : ""}
    <div class="toolbar"><label class="search-box"><span>⌕</span><input id="moduleSearch" type="search" placeholder="Buscar ${info.title.toLowerCase()}..." value="${escapeHTML(app.search)}"></label>${page === "inventory" ? `<button class="button button-outline" data-action="ai-suggestions">✦ Sugerencias IA</button>` : ""}<button class="button button-quiet" data-action="refresh">↻ Actualizar</button></div>
    <section class="panel module-panel"><div class="table-scroll" id="moduleTable"></div></section>`;
}
function renderModuleTable(page) {
  const info = moduleInfo[page];
  const search = app.search.toLocaleLowerCase("es");
  let rows = [...(records[page] || [])].filter((record) => Object.values(record).join(" ").toLocaleLowerCase("es").includes(search));
  if (page === "inventory") rows = rows.map((item) => ({ ...item, status: Number(item.available) <= Number(item.reorder) ? "Bajo reorden" : "Disponible" }));
  const tableRows = rows.map((record) => {
    const data = info.columns.map(([key]) => {
      let value = record[key];
      if (key === "status") return statusMarkup(value);
      if (["total", "price", "amount"].includes(key)) return `<span class="cell-strong">${formatMoney(value)}</span>`;
      if (key === "number") return cell(value, record.date || "");
      if (["available", "reserved", "second", "reorder", "leadTime", "safetyDays"].includes(key) && value !== undefined) return escapeHTML(value.toLocaleString("es-CR"));
      if (key === "material" && page === "quotes") return escapeHTML(value || "—");
      if (key === "client" && page === "sales") return cell(value, record.quote || "");
      if (key === "type") return statusMarkup(value);
      return escapeHTML(value || "—");
    });
    const edit = `<button class="row-action" data-action="edit-${page}" data-id="${escapeHTML(record.id)}">Editar</button>`;
    const deleteAction = app.role === "Propietario" ? `<button class="row-action delete" data-action="delete-${page}" data-id="${escapeHTML(record.id)}">Quitar</button>` : "";
    return [...data, `${edit}${deleteAction}`];
  });
  const headers = [...info.columns.map(([, label]) => label.toLocaleUpperCase("es")), "ACCIONES"];
  document.getElementById("moduleTable").innerHTML = tableMarkup(headers, tableRows, `No hay ${info.title.toLocaleLowerCase("es")} que coincidan con la búsqueda.`);
  document.querySelectorAll("#moduleTable [data-action]").forEach((button) => button.addEventListener("click", () => handleAction(button.dataset.action, button.dataset.id)));
}
function renderInvoicing() {
  const rows = records.sales.map((sale) => {
    const client = records.clients.find((item) => item.name === sale.client);
    const exported = sale.exported ? "Exportado" : "Pendiente";
    return [cell(sale.number, sale.date), escapeHTML(sale.client), escapeHTML(client?.identification || "Por completar"), escapeHTML(sale.date || "—"), formatMoney(sale.total), statusMarkup(exported), `<button class="row-action" data-action="export-one" data-id="${escapeHTML(sale.id)}">Descargar CSV</button>`];
  });
  return `${pageHeading("Facturación", "Exporta datos de ventas para tu plataforma de facturación electrónica.", "Exportar ventas", "export-sales")}
    <section class="panel" style="margin-bottom:15px"><div class="alert-row"><span class="alert-mark">↗</span><div class="alert-copy"><strong>La facturación electrónica se gestiona en tu plataforma externa.</strong><span>Este módulo genera un archivo CSV con los datos de venta; no emite, firma ni transmite comprobantes fiscales.</span></div></div></section>
    <div class="toolbar"><label class="search-box"><span>⌕</span><input id="moduleSearch" type="search" placeholder="Buscar ventas..." value="${escapeHTML(app.search)}"></label><button class="button button-quiet" data-action="refresh">↻ Actualizar</button></div>
    <section class="panel module-panel"><div class="table-scroll" id="moduleTable">${tableMarkup(["N.º VENTA", "CLIENTE", "IDENTIFICACIÓN", "FECHA", "TOTAL", "EXPORTACIÓN", "ACCIÓN"], rows)}</div></section>`;
}
function render() {
  renderNavigation();
  document.getElementById("breadcrumbCurrent").textContent = headings[app.page];
  document.getElementById("roleSelect").value = app.role;
  document.getElementById("headerAvatar").textContent = roleNames[app.role].split(" ").map((part) => part[0]).join("");
  const root = document.getElementById("pageContent");
  root.innerHTML = app.page === "dashboard" ? renderDashboard() : renderModule(app.page);
  root.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", () => handleAction(button.dataset.action, button.dataset.id)));
  const search = document.getElementById("moduleSearch");
  if (search) search.addEventListener("input", () => { app.search = search.value; renderModuleTable(app.page); });
  if (app.page !== "dashboard" && app.page !== "invoicing") renderModuleTable(app.page);
  if (app.page === "invoicing") {
    const input = document.getElementById("moduleSearch");
    input.addEventListener("input", () => {
      const query = input.value.toLocaleLowerCase("es");
      document.querySelectorAll("#moduleTable tbody tr").forEach((row) => { row.hidden = !row.innerText.toLocaleLowerCase("es").includes(query); });
    });
  }
}
function handleAction(action, id) {
  if (action === "refresh") { render(); toast("Datos actualizados."); return; }
  if (action === "view-quotes") { navigate("quotes"); return; }
  if (action === "view-purchases") { navigate("purchases"); return; }
  if (action === "view-shipments") { navigate("shipments"); return; }
  if (action === "ai-suggestions") { showAISuggestions(); return; }
  if (action === "export-sales") { exportSales(); return; }
  if (action === "export-one") { exportSales(id); return; }
  if (action === "new-client") { openForm("clients"); return; }
  if (action === "new-quote") { openForm("quotes"); return; }
  if (action === "new-inventory") { openForm("inventory"); return; }
  if (action === "new-purchase") { openForm("purchases"); return; }
  if (action.startsWith("new-")) { openForm(action.slice(4)); return; }
  if (action.startsWith("edit-")) { openForm(action.slice(5), id); return; }
  if (action.startsWith("delete-")) { deleteRecord(action.slice(7), id); }
}
function openForm(module, id = null) {
  if (!moduleInfo[module]) return;
  if (!roleRules[app.role].includes(module)) { toast("Este perfil no tiene permiso para esta acción."); return; }
  if (module === "invoicing") return;
  app.editingId = id;
  const info = moduleInfo[module];
  const record = (records[module] || []).find((item) => item.id === id);
  document.getElementById("modalEyebrow").textContent = headings[module].toLocaleUpperCase("es");
  document.getElementById("modalTitle").textContent = `${id ? "Editar" : "Nuevo"} ${info.singular}`;
  document.getElementById("submitModal").textContent = id ? "Guardar cambios" : "Guardar registro";
  document.getElementById("formFields").innerHTML = info.fields.map(([key, label, type, required, options]) => {
    const value = record?.[key] ?? (key === "date" && type === "date" ? new Date().toISOString().slice(0, 10) : "");
    const defaultValue = module === "sales" && key === "status" && !record ? "Confirmada" : module === "sales" && key === "reserveDays" && !record ? "15 días" : value;
    let control;
    if (type === "select") {
      const list = options === "clientOptions" ? getClientOptions() : options === "materialOptions" ? getMaterialOptions() : options === "supplierOptions" ? getSupplierOptions() : options || [];
      control = `<select id="field-${key}" name="${key}" ${required ? "required" : ""}><option value="">Selecciona una opción</option>${list.map((option) => `<option value="${escapeHTML(option)}" ${defaultValue === option ? "selected" : ""}>${escapeHTML(option)}</option>`).join("")}</select>`;
    } else if (type === "textarea") {
      control = `<textarea id="field-${key}" name="${key}" placeholder="Agrega información relevante...">${escapeHTML(defaultValue)}</textarea>`;
    } else {
      control = `<input id="field-${key}" name="${key}" type="${type}" value="${escapeHTML(defaultValue)}" ${required ? "required" : ""} ${type === "number" ? 'min="0" step="any"' : ""} placeholder="${type === "number" ? "0" : `Ingresa ${label.toLocaleLowerCase("es")}`}">`;
    }
    return `<div class="form-field ${type === "textarea" ? "wide" : ""}"><label for="field-${key}">${label}${required ? " *" : ""}</label>${control}</div>`;
  }).join("");
  const total = document.getElementById("formTotal");
  total.hidden = !info.total;
  total.innerHTML = info.total ? "Total estimado <strong id=\"quoteTotal\">₡0</strong> <span> · IVA no incluido</span>" : "";
  if (info.total) {
    const area = document.getElementById("field-area");
    const material = document.getElementById("field-material");
    const updateTotal = () => {
      const selected = records.materials.find((item) => item.name === material.value);
      document.getElementById("quoteTotal").textContent = formatMoney((Number(area.value) || 0) * (Number(selected?.price) || 0));
    };
    area.addEventListener("input", updateTotal);
    material.addEventListener("change", updateTotal);
    updateTotal();
  }
  if (module === "sales") {
    const quantity = document.getElementById("field-quantity");
    const material = document.getElementById("field-material");
    const amount = document.getElementById("field-total");
    const tax = document.getElementById("field-tax");
    const updateAmount = () => {
      const selected = records.materials.find((item) => item.name === material.value);
      amount.value = (Number(quantity.value) || 0) * (Number(selected?.price) || 0) + (Number(tax.value) || 0);
    };
    quantity.addEventListener("input", updateAmount);
    material.addEventListener("change", updateAmount);
    tax.addEventListener("input", updateAmount);
    if (!record) updateAmount();
  }
  document.getElementById("modalBackdrop").hidden = false;
  document.body.style.overflow = "hidden";
  document.querySelector(".modal").scrollTop = 0;
  document.querySelector("#formFields input, #formFields select, #formFields textarea")?.focus();
}
function closeForm() {
  document.getElementById("modalBackdrop").hidden = true;
  document.body.style.overflow = "";
  document.getElementById("recordForm").reset();
  app.editingId = null;
}
function createNumber(module) {
  const prefixes = { quotes: "COT", sales: "VTA", purchases: "OC", shipments: "ENV" };
  const prefix = prefixes[module] || "REG";
  const last = Math.max(0, ...(records[module] || []).map((record) => Number(record.number?.match(/(\d+)$/)?.[1]) || 0));
  return `${prefix}-${String(last + 1).padStart(4, "0")}`;
}
function submitRecord(event) {
  event.preventDefault();
  const module = app.page;
  const info = moduleInfo[module];
  if (!info || !roleRules[app.role].includes(module)) { toast("No tienes permiso para guardar este registro."); return; }
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  for (const [key] of info.fields) {
    if (["area", "quantity", "price", "tax", "total", "amount", "available", "reserved", "second", "leadTime", "safetyDays"].includes(key) && data[key] !== "") data[key] = Number(data[key]);
  }
  if (module === "quotes" && Number(data.area) <= 0) {
    toast("Ingresa un área mayor que cero para calcular la cotización.");
    return;
  }
  if (module === "sales" && Number(data.quantity) <= 0) {
    toast("La cantidad de la venta debe ser mayor que cero.");
    return;
  }
  if (info.total) {
    const material = records.materials.find((item) => item.name === data.material);
    data.total = Number(data.area || 0) * Number(material?.price || 0);
    if (!app.editingId) {
      data.date = new Date().toLocaleDateString("es-CR", { day: "2-digit", month: "short", year: "numeric" });
      data.status = "Pendiente";
      data.number = createNumber(module);
    }
  }
  if (module === "inventory") {
    const material = records.materials.find((item) => item.name === data.material);
    const existing = records.inventory.find((item) => item.material === data.material && item.id !== app.editingId);
    if (existing && !app.editingId) {
      existing.available = Number(existing.available || 0) + Number(data.available || 0);
      existing.reserved = Number(existing.reserved || 0) + Number(data.reserved || 0);
      existing.second = Number(existing.second || 0) + Number(data.second || 0);
      existing.leadTime = Number(data.leadTime || existing.leadTime || 0);
      existing.safetyDays = Number(data.safetyDays || existing.safetyDays || 0);
      existing.reorder = calculateReorder(existing);
      saveRecords();
      closeForm();
      render();
      toast("Existencias actualizadas y sumadas al inventario.");
      return;
    }
    data.sku = material?.sku || "—";
    data.reorder = calculateReorder(data);
    data.status = Number(data.available) <= Number(data.reorder) ? "Bajo reorden" : "Disponible";
  }
  if (module === "materials") data.status = "Activo";
  if (module === "clients" || module === "suppliers") data.status = "Activo";
  if (module === "purchases" || module === "sales" || module === "shipments") {
    data.date = data.date ? new Date(`${data.date}T12:00:00`).toLocaleDateString("es-CR", { day: "2-digit", month: "short", year: "numeric" }) : "";
    if (!data.number) data.number = createNumber(module);
  }
  if (module === "quotes") data.status = "Pendiente";
  if (module === "shipments" && !data.status) data.status = "Pendiente";
  if (module === "sales") {
    const client = records.clients.find((item) => item.name === data.client);
    data.identification = client?.identification || "";
    data.tax = Number(data.tax || 0);
    data.subtotal = Number(data.total || 0) - data.tax;
    if (data.payment === "Apartado 10 %") {
      const days = Number.parseInt(data.reserveDays, 10) || 15;
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + days);
      data.reserveUntil = dueDate.toLocaleDateString("es-CR", { day: "2-digit", month: "short", year: "numeric" });
    } else {
      data.reserveUntil = "";
    }
    if (data.subtotal < 0) {
      toast("Los impuestos no pueden superar el total de la venta.");
      return;
    }
    if (!updateSaleStock(data, app.editingId)) return;
  }
  if (!records[module]) records[module] = [];
  const wasEditing = Boolean(app.editingId);
  if (app.editingId) {
    const index = records[module].findIndex((item) => item.id === app.editingId);
    if (index >= 0) records[module][index] = { ...records[module][index], ...data };
  } else {
    records[module].unshift({ ...data, id: `${module}-${Date.now()}` });
  }
  saveRecords();
  closeForm();
  render();
  if (module === "sales" && data.payment === "Apartado 10 %") {
    const deposit = Number(data.total || 0) * 0.1;
    toast(`Venta registrada. Apartado inicial sugerido: ${formatMoney(deposit)}.`);
  } else {
    toast(wasEditing ? "Cambios guardados." : `${info.singular[0].toLocaleUpperCase("es")}${info.singular.slice(1)} creado correctamente.`);
  }
}
function updateSaleStock(data, saleId) {
  const previous = records.sales.find((sale) => sale.id === saleId);
  const material = records.inventory.find((item) => item.material === data.material);
  const quantity = Number(data.quantity || 0);
  const activeStatuses = ["Confirmada", "Preparando", "Enviada", "Entregada"];
  const allocate = activeStatuses.includes(data.status);
  const sameMaterialRelease = previous?.stockAllocated && previous.material === data.material ? Number(previous.quantity || 0) : 0;
  if (allocate && (!material || Number(material.available || 0) + sameMaterialRelease < quantity)) {
    toast(`No hay suficientes unidades disponibles de ${data.material}. Revisa el inventario antes de confirmar la venta.`);
    return false;
  }
  if (previous?.stockAllocated) {
    const previousMaterial = records.inventory.find((item) => item.material === previous.material);
    if (previousMaterial) {
      previousMaterial.available = Number(previousMaterial.available || 0) + Number(previous.quantity || 0);
      if (previous.stockAllocationType === "reservation") previousMaterial.reserved = Math.max(0, Number(previousMaterial.reserved || 0) - Number(previous.quantity || 0));
    }
  }
  if (allocate && material) {
    material.available = Number(material.available || 0) - quantity;
    const isReservation = data.payment === "Apartado 10 %";
    if (isReservation) material.reserved = Number(material.reserved || 0) + quantity;
    data.stockAllocated = true;
    data.stockAllocationType = isReservation ? "reservation" : "sale";
    material.status = Number(material.available) <= Number(material.reorder) ? "Bajo reorden" : "Disponible";
  } else {
    data.stockAllocated = false;
    data.stockAllocationType = "";
  }
  return true;
}
function calculateReorder(item) {
  const estimatedDaily = Math.max(1, Number(item.reserved || 0) / 30);
  const leadTime = Number(item.leadTime || 0);
  const safetyDays = Number(item.safetyDays || 0);
  return Math.ceil(estimatedDaily * (leadTime + safetyDays));
}
function deleteRecord(module, id) {
  if (app.role !== "Propietario") { toast("Solo el Propietario puede eliminar registros."); return; }
  if (!confirm("¿Quieres quitar este registro? Esta acción no se puede deshacer.")) return;
  const sale = module === "sales" ? records.sales.find((item) => item.id === id) : null;
  if (sale?.stockAllocated) {
    const material = records.inventory.find((item) => item.material === sale.material);
    if (material) {
      material.available = Number(material.available || 0) + Number(sale.quantity || 0);
      if (sale.stockAllocationType === "reservation") material.reserved = Math.max(0, Number(material.reserved || 0) - Number(sale.quantity || 0));
    }
  }
  records[module] = records[module].filter((item) => item.id !== id);
  saveRecords();
  render();
  toast("Registro eliminado.");
}
function showAISuggestions() {
  const suggestions = records.inventory.filter((item) => Number(item.available) <= Number(item.reorder));
  const message = suggestions.length
    ? `SUGERENCIAS PARA REVISIÓN DEL PROPIETARIO\n\n${suggestions.map((item) => {
      const target = Math.ceil(Number(item.reserved || 0) + Number(item.reorder || 0));
      const recommended = Math.max(0, target - Number(item.available || 0));
      return `• ${item.material}: quedan ${item.available} disponibles y hay ${item.reserved} reservadas. Reabastecimiento sugerido: ${recommended} unidades. Tránsito estimado: ${item.leadTime || "por confirmar"} días.`;
    }).join("\n\n")}\n\nSon sugerencias orientativas basadas en los datos registrados. Revisa y aprueba antes de tomar decisiones; no se crean órdenes automáticamente.`
    : "No se identifican materiales por debajo del punto de reorden registrado. La sugerencia es orientativa y requiere revisión del Propietario.";
  showMessage("✦ Sugerencias de reabastecimiento", message);
}
function showMessage(title, message) {
  const modal = document.getElementById("modalBackdrop");
  document.getElementById("modalEyebrow").textContent = "ASISTENTE · REVISIÓN HUMANA";
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("formFields").innerHTML = `<div class="form-field wide"><label>Resumen basado en tus registros</label><textarea readonly style="min-height:180px;line-height:1.6">${escapeHTML(message)}</textarea></div>`;
  document.getElementById("formTotal").hidden = true;
  document.getElementById("submitModal").textContent = "Entendido";
  document.getElementById("cancelModal").hidden = true;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeMessage() {
  document.getElementById("cancelModal").hidden = false;
  closeForm();
  render();
}
function exportSales(id) {
  const sales = records.sales.filter((sale) => !id || sale.id === id);
  if (!sales.length) { toast("No hay ventas para exportar."); return; }
  const headers = ["numero_venta", "fecha", "cliente", "identificacion", "producto_servicio", "cantidad", "precio_unitario", "subtotal", "impuestos", "total", "condicion_pago"];
  const rows = sales.map((sale) => {
    const client = records.clients.find((item) => item.name === sale.client);
    const total = Number(sale.total || 0);
    const quantity = Number(sale.quantity || 1);
    const subtotal = Number(sale.subtotal ?? total);
    const taxes = Number(sale.tax || 0);
    return [sale.number, sale.date, sale.client, client?.identification || sale.identification || "", sale.material || sale.product || "Venta general (detalle por completar)", quantity, subtotal / quantity, subtotal, taxes, total, sale.payment || ""];
  });
  const csv = [headers, ...rows].map((row) => row.map(csvEscape).join(",")).join("\r\n");
  const blob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = id ? `venta-${sales[0].number}.csv` : "ventas-castor-soluciones.csv";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  sales.forEach((sale) => { sale.exported = true; });
  saveRecords();
  render();
  toast(`${sales.length} venta${sales.length === 1 ? "" : "s"} exportada${sales.length === 1 ? "" : "s"} en CSV.`);
}
function csvEscape(value) { return `"${String(value ?? "").replace(/"/g, '""')}"`; }
let toastTimer;
function toast(message) {
  const region = document.getElementById("toastRegion");
  const item = document.createElement("div");
  item.className = "toast";
  item.textContent = message;
  region.appendChild(item);
  window.setTimeout(() => item.remove(), 3500);
}

document.getElementById("roleSelect").addEventListener("change", (event) => {
  app.role = event.target.value;
  localStorage.setItem("castorRole", app.role);
  if (!roleRules[app.role].includes(app.page)) app.page = "dashboard";
  render();
  toast(`Vista de ${app.role.toLocaleLowerCase("es")} activada.`);
});
document.getElementById("menuButton").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
document.getElementById("closeModal").addEventListener("click", closeMessage);
document.getElementById("cancelModal").addEventListener("click", closeForm);
document.getElementById("modalBackdrop").addEventListener("click", (event) => { if (event.target === event.currentTarget) closeMessage(); });
document.getElementById("recordForm").addEventListener("submit", (event) => {
  if (document.getElementById("formFields").querySelector("[readonly]")) { event.preventDefault(); closeMessage(); return; }
  submitRecord(event);
});
document.getElementById("helpButton").addEventListener("click", () => showMessage("Guía rápida del sistema", "• Usa el menú para cambiar de módulo.\n• Cambia el perfil en la parte superior para revisar los permisos de Propietario, Vendedor y Logística.\n• Los registros se guardan en este navegador.\n• Revisa las existencias reservadas antes de ofrecer producto a otro cliente.\n• El asistente solo presenta sugerencias: la decisión siempre la toma una persona.\n• Facturación exporta un CSV de ejemplo para cargar en la plataforma externa.\n\nEsta demostración no incluye servidor ni autenticación real."));
document.getElementById("logoutButton").addEventListener("click", () => showMessage("Sesión de demostración", "Esta aplicación funciona en modo demostración local. El cambio de perfil no autentica usuarios ni protege datos. Para uso real se requiere un servidor con inicio de sesión seguro y controles de acceso."));
document.getElementById("notificationButton").addEventListener("click", () => showMessage("Notificaciones", `${lowStockCount()} material(es) necesitan revisión de reabastecimiento.\n\n• OC-0042 está en tránsito desde RoofTech International.\n• Revisa las cotizaciones pendientes de aprobación.`));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!document.getElementById("modalBackdrop").hidden) closeMessage();
    document.getElementById("sidebar").classList.remove("open");
  }
});
render();
