1. ESCALA TIPOGRÁFICA INADECUADA

    header-title (28px) vs title-article (30px) → diferencia insuficiente

    title-project (20px) vs texto normal (16-20px) → casi no destaca

    title-section (18px) demasiado pequeño para ser título

2. CONTRASTE PROBLEMÁTICO

    En modo oscuro: --color-tertiary es blanco (#f6fefd) → hover demasiado brillante

    item-technology borde negro puro → demasiado contraste para elementos secundarios

    Texto sobre --color-primary (especialmente en modo claro) → verificar relación de contraste WCAG

3. COMPETICIÓN POR ATENCIÓN

    Menú idiomas (hover rojo/terciario) atrae más atención que navegación principal

    Todos los item-technology tienen igual peso visual → sobrecarga la sección

    Iconos SVG mismo color que texto → no indican interactividad

4. JERARQUÍA PLANA EN CONTENIDO

    Todos los item-project idénticos visualmente → no hay proyecto principal/secundario

    Lista de tecnologías muestra todo con igual importancia

    article-welcome, article-technologies, article-projects mismos estilos

5. PROBLEMAS TÉCNICOS ESPECÍFICOS

    main .side-menu { max-height: 50vh; } → corta contenido innecesariamente

    :root.dark .item-technology borde blanco sobre fondo oscuro → demasiado contraste

    Transición * { transition: color .4s ease-out, background-color .5s ease-out; } → aplicada universalmente puede afectar rendimiento

6. FALTA DE PUNTOS FOCALES

    Ningún elemento guía el ojo hacia: 1) Tu nombre, 2) Tu rol, 3) Proyecto principal

    Los CTA ("Ver proyecto") no destacan suficiente sobre contenido circundante

    No hay diferenciación visual entre secciones principales y secundarias

7. CONSISTENCIA ENTRE COMPONENTES

    Header: nombre sin énfasis especial

    Sidebar: nombre con más contexto pero mismo estilo

    Side-menu: información duplicada sin jerarquía clara

    Footer: enlaces con mismo peso que copyright

8. PROBLEMAS DE ESPACIADO Y AGRUPACIÓN

    title-article muy pegado al contenido siguiente (gap: .5rem)

    item-project todos con misma altura mínima (12rem) → forza espaciado innecesario

    Listas de proyectos/habilidades/idomas con mismo patrón visual

9. ESTADOS INTERACTIVOS MEJORABLES

    Hover en item-technology inversión total blanco/negro → muy abrupto

    link-project-wrapper::after efecto muy sutil

    Hover en menú navegación vs hover en menú idiomas → diferentes comportamientos

10. RESPONSIVE

    En móvil: side-menu cambia a flex row pero mantiene max-height: 50vh

    header-sidebar width fijo (25rem/15rem) → no usa porcentajes

    Breakpoints inconsistentes (1000px, 800px, 450px)
