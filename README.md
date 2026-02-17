# Clínica Psicológica • Dra. Daiane Pinheiro

Website profissional de uma psicóloga clínica especializada em Terapia Cognitivo-Comportamental (TCC) e Neurociência.

## 📋 Descrição

Site responsivo e moderno para a clínica psicológica da Dra. Daiane Pinheiro. Apresenta serviços, abordagem terapêutica, avaliações de pacientes e formulário de contato com integração WhatsApp.

## 🎯 Funcionalidades

- ✅ **Design Responsivo** — Adaptado para mobile (até 900px), tablet e desktop
- ✅ **Navegação Suave** — Scroll automático para seções com âncoras internas
- ✅ **Integração WhatsApp** — Link direto para agendamento via WhatsApp
- ✅ **Perfil Instagram** — Links para rede social
- ✅ **Animações de Reveal** — Elementos aparecem ao entrar em viewport
- ✅ **Ícones Dinâmicos** — Lucide Icons para interface moderna
- ✅ **Formulário de Contato** — Estrutura para coleta de informações
- ✅ **Navbar Fixa** — Menu fixo que muda de transparência ao scroll

## 🛠️ Tecnologias

- **HTML5** — Estrutura semântica com seções organizadas
- **CSS3** — Design responsivo com flexbox e grid
  - Media queries para mobile (≤900px)
  - Animações com `@keyframes`
  - Gradientes e overlays
  - Otimização de espaçamento e tipografia
- **JavaScript Vanilla** — Comportamentos interativos
  - Smooth scroll com `window.scrollTo()`
  - Detecção de scroll para reveal animations
  - Event listeners para navegação
  - Navbar opacity toggle

## 📁 Estrutura de Arquivos

```
site-clinica-psi/
├── index.html          # Página principal (6 seções)
├── style.css           # Estilos completos (desktop + mobile)
├── script.js           # Interatividade JavaScript
├── README.md           # Documentação do projeto
└── images/
    ├── oficial2.jpg    # Imagem hero (rosto da psicóloga)
    └── office-psi.jpg  # Imagem da seção sobre
```

## 📄 Seções da Página

| Seção | ID | Conteúdo |
|-------|----|---------:|
| **Hero** | #inicio | Apresentação + CTA de agendamento |
| **Sobre** | #sobre | Apresentação pessoal da psicóloga |
| **Abordagem** | #abordagem | TCC + Neurociência (4 cards) |
| **Serviços** | #servicos | 6 serviços ofertados |
| **Avaliações** | — | 6 depoimentos de pacientes |
| **Contato** | #contato | Links + formulário de contato |

## 🎨 Responsividade

### Desktop (900px+)
- Layout de 3 colunas para serviços
- Navbar com navegação horizontal visível
- Grid automático para cards de abordagem
- Padding e fontes grandes

### Mobile (≤900px)
- Layout de 1 coluna para todos os grids
- Navbar oculta, botão "Agendar" destacado
- Padding e fonts otimizados
- Ícones redimensionados (40px)
- Botões 100% da largura

## 🔗 Links e Integrações

| Elemento | Link | Destino |
|----------|------|---------|
| Botão "Agendar" (hero) | href="#contato" | Seção de contato |
| Botão "Agendar" (nav) | onclick → #contato-form | Formulário |
| Abordagem (hero) | href="#abordagem" | Seção abordagem |
| WhatsApp (phone icon) | wa.me/5511979812911 | Chat whatsapp |
| Instagram | instagram.com/psicologadaianepinheiro | Perfil Instagram |

## 📱 Como Usar

### Localmente
1. Clone ou baixe os arquivos do projeto
2. Abra `index.html` em um navegador moderno
3. Nenhuma instalação ou build necessário (vanilla stack)

### Deploy
Hospedável em qualquer servidor estático:
- **GitHub Pages** — Gratuito, integrado com git
- **Netlify** — Drag-and-drop ou CI/CD
- **Vercel** — Deploy automático
- **Servidor próprio** — Qualquer servidor HTTP

## ⚙️ Customização

### Alterar Nome/Título
Em `index.html`:
```html
<title>Clínica Psicologa • Daiane Pinheiro</title>
<div class="logo">Dra. Daiane Pinheiro</div>
```

### Alterar Número WhatsApp
Em `index.html`, procure por:
```
wa.me/5511979812911
```
Substitua pelo número correto (sem caracteres especiais):
```
wa.me/55SEU_DDD_SEU_NUMERO
```

### Alterar Imagens
Substitua em `images/`:
- `oficial2.jpg` → imagem hero (recomendado: 1200x1200px+)
- `office-psi.jpg` → imagem sobre (recomendado: 500x500px+)

### Alterar Cores
Em `style.css`, procure por valores de cores:
```css
/* Cor primária */
color: #5c5c5c;

/* Fundo hero */
background: linear-gradient(135deg, #f5f2ee 0%, #fff 100%);
```

## 🚀 Como Funciona

### Smooth Scroll (JavaScript)
```javascript
// Ao clicar em links com href="#section"
// A página rola suavemente até a seção com offset de navbar
a[href^="#"].addEventListener('click', (e) => {
  window.scrollTo({ top: target.top - navHeight, behavior: 'smooth' });
});
```

### Reveal Animations
```css
/* Elementos com class="reveal" começam invisíveis
   e ficam visíveis (.active) quando entram no viewport */
.reveal { opacity: 0; transition: .6s; }
.reveal.active { opacity: 1; transform: translateY(0); }
```

### Navbar Responsiva
```javascript
// Ao scroll > 50px, muda background
// Em mobile ≤900px, nav fica oculta e botão "Agendar" fica visível
```

## ✅ Checklist de Desenvolvimento

- [x] Layout responsivo mobile/desktop (≤900px)
- [x] Navegação com smooth scroll
- [x] Integração WhatsApp (wa.me)
- [x] Links Instagram
- [x] Depoimentos de pacientes (6)
- [x] Form de contato (estrutura HTML)
- [x] Animações ao scroll (reveal)
- [x] Navbar fixa com efeito de scroll
- [x] Otimização de imagens (responsive img + srcset)
- [x] Ícones dinâmicos (Lucide)

## 📊 Performance

- **Tamanho total**: ~150KB (sem otimizações)
- **Dependências externas**: Lucide Icons (CDN), Google Fonts (CDN)
- **Compatibilidade**: Chrome, Firefox, Safari, Edge (browsers modernos)

## 📧 Contato

**Dra. Daiane Pinheiro**
- **WhatsApp**: [(11) 97981-2911](https://wa.me/5511979812911)
- **Instagram**: [@psicologadaianepinheiro](https://www.instagram.com/psicologadaianepinheiro/)
- **Endereço**: Av. Paulista, 1000 — São Paulo, SP

## 📄 Licença

Projeto desenvolvido para uso profissional exclusivo da Dra. Daiane Pinheiro.

---

**Última atualização:** Fevereiro de 2026  
**Versão**: 1.0.0  
**Status**: ✅ Produção

---

© 2026 — Developed by Tiele Fernandes 