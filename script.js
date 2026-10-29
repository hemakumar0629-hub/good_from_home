const recipes = [
  {name:'Apple, oat & yogurt bowl',emoji:'🥣',time:5,diet:['vegetarian'],ingredients:['apples','oats','yogurt'],description:'A quick no-cook breakfast with fruit, oats and creamy yogurt.',tags:['No-cook','Quick']},
  {name:'Chickpea cucumber salad',emoji:'🥗',time:10,diet:['vegetarian','vegan','gluten-free'],ingredients:['chickpeas','cucumber','tomatoes','lemon','olive oil'],description:'A fresh, filling salad tossed together in minutes.',tags:['No-cook','Plant-powered']},
  {name:'Avocado tomato toast',emoji:'🥑',time:10,diet:['vegetarian','vegan'],ingredients:['bread','avocado','tomatoes','lemon'],description:'Whole-grain toast topped with avocado and juicy tomato.',tags:['Quick','Plant-powered']},
  {name:'Garden chickpea bowl',emoji:'🥗',time:20,diet:['vegetarian','vegan','gluten-free'],ingredients:['chickpeas','spinach','tomatoes','cucumber','lemon','olive oil'],description:'Crispy chickpeas and fresh greens with a bright lemon dressing.',tags:['Plant-powered','High fibre']},
  {name:'Spinach & tomato egg skillet',emoji:'🍳',time:20,diet:['vegetarian','gluten-free'],ingredients:['eggs','spinach','tomatoes','onion','olive oil'],description:'A cozy one-pan meal with greens, juicy tomatoes and soft eggs.',tags:['Protein-rich','One pan']},
  {name:'Brown rice veggie bowl',emoji:'🍚',time:30,diet:['vegetarian','vegan','gluten-free'],ingredients:['brown rice','spinach','carrots','chickpeas','lemon'],description:'A satisfying grain bowl with colorful vegetables and a squeeze of lemon.',tags:['Plant-powered','Meal prep']},
  {name:'Tomato & white bean soup',emoji:'🍲',time:30,diet:['vegetarian','vegan','gluten-free'],ingredients:['tomatoes','white beans','onion','garlic','spinach','olive oil'],description:'A comforting, pantry-friendly soup finished with leafy greens.',tags:['High fibre','One pot']},
  {name:'Rainbow veggie omelette',emoji:'🍳',time:15,diet:['vegetarian','gluten-free'],ingredients:['eggs','spinach','tomatoes','bell pepper','onion'],description:'A quick, fluffy omelette that makes good use of leftover vegetables.',tags:['Protein-rich','Quick']},
  {name:'Lemony lentil salad',emoji:'🥣',time:25,diet:['vegetarian','vegan','gluten-free'],ingredients:['lentils','cucumber','tomatoes','spinach','lemon','olive oil'],description:'Tender lentils, crunchy vegetables and a simple citrus dressing.',tags:['Plant-powered','High fibre']},
  {name:'Garlic spinach pasta',emoji:'🍝',time:25,diet:['vegetarian'],ingredients:['pasta','spinach','garlic','tomatoes','olive oil'],description:'A simple weeknight pasta with garlicky greens and fresh tomatoes.',tags:['Comforting','Quick']},
  {name:'Crispy chickpea wraps',emoji:'🌯',time:25,diet:['vegetarian','vegan'],ingredients:['chickpeas','tortillas','spinach','tomatoes','yogurt','lemon'],description:'Spiced chickpeas tucked into a fresh, crunchy wrap.',tags:['Plant-powered','Easy']},
  {name:'Warm rice & egg plate',emoji:'🍛',time:15,diet:['vegetarian','gluten-free'],ingredients:['brown rice','eggs','spinach','soy sauce','sesame oil'],description:'Leftover rice gets a new life with greens and a jammy egg.',tags:['Quick','Use leftovers']},
  {name:'Chicken & veggie rice bowl',emoji:'🍗',time:30,diet:['non-vegetarian','gluten-free'],ingredients:['chicken','brown rice','spinach','carrots','soy sauce'],description:'A balanced bowl of chicken, whole grains and colorful vegetables.',tags:['Protein-rich','One bowl']},
  {name:'Salmon with greens',emoji:'🐟',time:25,diet:['non-vegetarian','gluten-free'],ingredients:['salmon','spinach','lemon','brown rice','olive oil'],description:'A simple salmon supper with leafy greens and a bright lemon finish.',tags:['Protein-rich','Omega-3'],cuisine:'Japanese'},
  {name:'Sambar-inspired lentil bowl',emoji:'🍛',time:35,diet:['vegetarian','vegan','gluten-free'],ingredients:['toor dal','tomatoes','onion','spinach','curry leaves','sambar powder','brown rice'],description:'A weeknight bowl inspired by South Indian lentil and vegetable flavors.',tags:['Plant-powered','Comforting'],cuisine:'Indian'},
  {name:'South Indian tomato rasam',emoji:'🍲',time:25,diet:['vegetarian','vegan','gluten-free'],ingredients:['tomatoes','rasam powder','curry leaves','cumin','garlic'],description:'A light, warming tomato broth with South Indian spices. Serve with rice or enjoy as soup.',tags:['Light','South Indian'],cuisine:'Indian'},
  {name:'Mushroom & potato masala skillet',emoji:'🍄',time:30,diet:['vegetarian','vegan','gluten-free'],ingredients:['potatoes','mushrooms','tomatoes','onion','garlic','cumin','olive oil'],description:'Golden potatoes and mushrooms simmered with tomato, garlic and warm spices.',tags:['One pan','Plant-powered'],cuisine:'Indian'},
  {name:'Quinoa veggie bowl',emoji:'🥑',time:25,diet:['vegetarian','vegan','gluten-free'],ingredients:['quinoa','spinach','tomatoes','cucumber','lemon','olive oil'],description:'A balanced grain bowl with quinoa, fresh vegetables and lemon dressing.',tags:['Plant-powered','High fibre']},
  {name:'Italian tomato bean soup',emoji:'🍲',time:35,diet:['vegetarian','vegan','gluten-free'],ingredients:['white beans','tomatoes','onion','garlic','spinach','olive oil'],description:'A rustic tomato and bean soup with greens and olive oil.',tags:['High fibre','One pot'],cuisine:'Italian'},
  {name:'Mexican black bean rice bowl',emoji:'🥑',time:25,diet:['vegetarian','vegan','gluten-free'],ingredients:['black beans','brown rice','tomatoes','avocado','lime'],description:'Black beans, rice and fresh toppings make a colorful, filling bowl.',tags:['Plant-powered','High fibre'],cuisine:'Mexican'},
  {name:'Japanese salmon rice bowl',emoji:'🍱',time:30,diet:['non-vegetarian','gluten-free'],ingredients:['salmon','brown rice','cucumber','soy sauce','carrots'],description:'A simple rice bowl with salmon, crisp vegetables and savory dressing.',tags:['Protein-rich','Balanced bowl'],cuisine:'Japanese'},
  {name:'Thai tofu vegetable stir-fry',emoji:'🥢',time:25,diet:['vegetarian','vegan','gluten-free'],ingredients:['tofu','broccoli','carrots','bell pepper','soy sauce','brown rice'],description:'Tofu and crunchy vegetables tossed in a quick, savory stir-fry.',tags:['Plant-powered','Quick'],cuisine:'Thai'},
  {name:'Chinese vegetable egg fried rice',emoji:'🍚',time:20,diet:['vegetarian','gluten-free'],ingredients:['brown rice','eggs','carrots','peas','soy sauce','onion'],description:'A leftover-friendly fried rice with egg and vegetables.',tags:['Use leftovers','One pan'],cuisine:'Chinese'},
  {name:'Korean tofu and greens bowl',emoji:'🥬',time:25,diet:['vegetarian','vegan','gluten-free'],ingredients:['tofu','spinach','brown rice','carrots','soy sauce'],description:'Crisp tofu and greens over rice with a punchy, savory sauce.',tags:['Plant-powered','Quick'],cuisine:'Korean'},
  {name:'Greek chickpea salad',emoji:'🥗',time:15,diet:['vegetarian','vegan','gluten-free'],ingredients:['chickpeas','cucumber','tomatoes','lemon','olive oil'],description:'A fresh chickpea salad with cucumber, tomato and lemon.',tags:['No-cook','Plant-powered'],cuisine:'Mediterranean'},
  {name:'Middle Eastern lentils and rice',emoji:'🧅',time:40,diet:['vegetarian','vegan','gluten-free'],ingredients:['lentils','brown rice','onion','olive oil'],description:'A simple lentil and rice dish topped with deeply browned onions.',tags:['Plant-powered','Pantry-friendly'],cuisine:'Middle Eastern'},
  {name:'French ratatouille-style vegetables',emoji:'🍆',time:40,diet:['vegetarian','vegan','gluten-free'],ingredients:['zucchini','tomatoes','bell pepper','onion','garlic','olive oil'],description:'Slow-simmered summer vegetables served with rice or bread.',tags:['Plant-powered','One pot'],cuisine:'French'},
  {name:'Ethiopian-inspired red lentil stew',emoji:'🥣',time:35,diet:['vegetarian','vegan','gluten-free'],ingredients:['lentils','tomatoes','onion','garlic','olive oil'],description:'A warming red lentil stew seasoned with pantry spices.',tags:['Plant-powered','High fibre'],cuisine:'Ethiopian'},
  {name:'Caribbean black bean bowl',emoji:'🍍',time:30,diet:['vegetarian','vegan','gluten-free'],ingredients:['black beans','brown rice','tomatoes','lime','bell pepper'],description:'Beans and rice with bright lime and colorful vegetables.',tags:['Plant-powered','Filling'],cuisine:'Caribbean'}
];

const pantry = new Map();
const pantryEl = document.querySelector('#pantry');
const input = document.querySelector('#ingredient-input');
const photoInput = document.querySelector('#ingredient-photo');
const photoPreview = document.querySelector('#photo-preview');
const grid = document.querySelector('#recipe-grid');
const title = document.querySelector('#results-title');
const count = document.querySelector('#result-count');
const norm = value => value.trim().toLowerCase().replace(/s$/, '');
const ingredientAliases = {
  'toor dal':['lentils'], 'lentils':['toor dal'], 'pigeon pea':['toor dal','lentils'], 'pigeon peas':['toor dal','lentils'],
  'sambar powder':['sambar powder','south indian masala'], 'rasam powder':['rasam powder','south indian masala'],
  'south indian masala':['sambar powder','rasam powder','south indian masala'],
  'coriander powder':['cumin'], 'jeera':['cumin'], 'tomato':['tomatoes'], 'chilli powder':['sambar powder']
};
let pendingPhoto = null;
const curatedProducts = [
  {name:'South Indian Masalas (Pack of 5)',brand:'Kwality Foods',terms:['south indian masala sambar rasam bisibele puliogare'],url:'https://kwalityfoods.in/product/kwality-south-indian-masalas/'},
  {name:'Sambar Powder',brand:'Aachi',terms:['sambar sambhar masala'],url:'https://aachifoods.com/products/sambar-powder'},
  {name:'Madras Sambar Powder',brand:'MTR Foods',terms:['sambar sambhar madras'],url:'https://www.mtrfoods.com/products/masala-powders'},
  {name:'Sambar Powder',brand:'Eastern',terms:['sambar sambhar'],url:'https://shop.orklaindia.com/products/sambar-powder-eastern'},
  {name:'Rasam Powder',brand:'Kwality Foods',terms:['rasam south indian masala'],url:'https://kwalityfoods.in/product-category/masala-manufacturers-in-india/south-indian-masalas/'},
  {name:'Idicha Sambar Powder',brand:'Aachi',terms:['sambar sambhar idicha'],url:'https://aachifoods.com/products/idicha-sambar-powder'}
];

function addIngredient(value) {
  const ingredient = value.trim().toLowerCase();
  if (!ingredient) return;
  pantry.set(ingredient, pendingPhoto);
  input.value = '';
  photoInput.value = '';
  pendingPhoto = null;
  photoPreview.replaceChildren(); photoPreview.hidden = true;
  renderPantry();
  findMeals();
}

function renderPantry() {
  pantryEl.replaceChildren();
  if (!pantry.size) {
    const empty = document.createElement('span');
    empty.className = 'empty-pantry';
    empty.textContent = 'Your ingredient list will show up here.';
    pantryEl.append(empty);
    return;
  }
  [...pantry.entries()].forEach(([item, photo]) => {
    const chip = document.createElement('span');
    chip.className = 'ingredient-chip';
    if (photo) { const thumb = document.createElement('img'); thumb.src = photo; thumb.alt = ''; thumb.className = 'ingredient-thumb'; chip.append(thumb); }
    chip.append(document.createTextNode(item));
    const remove = document.createElement('button');
    remove.type = 'button'; remove.setAttribute('aria-label', `Remove ${item}`); remove.textContent = '×';
    remove.addEventListener('click', () => { pantry.delete(item); renderPantry(); findMeals(); });
    chip.append(remove); pantryEl.append(chip);
  });
}

function createCard(recipe, matched, missing) {
  const card = document.createElement('article'); card.className = 'recipe-card';
  const top = document.createElement('div'); top.className = 'recipe-top';
  const emoji = document.createElement('span'); emoji.className = 'recipe-emoji'; emoji.textContent = recipe.emoji;
  const time = document.createElement('span'); time.className = 'recipe-time'; time.textContent = `◷ ${recipe.time} MIN`;
  top.append(emoji, time);
  const h3 = document.createElement('h3'); h3.textContent = recipe.name;
  const desc = document.createElement('p'); desc.className = 'recipe-desc'; desc.textContent = recipe.description;
  const tags = document.createElement('div'); tags.className = 'recipe-tags';
  recipe.tags.forEach(label => { const tag = document.createElement('span'); tag.className = 'recipe-tag'; tag.textContent = label; tags.append(tag); });
  const match = document.createElement('div'); match.className = 'match-line';
  if (!pantry.size) match.textContent = 'Add ingredients to see your match';
  else {
    const have = document.createElement('strong'); have.textContent = `✓ ${matched.length} you have`;
    const rest = document.createElement('span'); rest.className = missing.length ? 'missing' : ''; rest.textContent = missing.length ? ` · ${missing.length} to get` : ' · You have everything!';
    match.append(have, rest);
  }
  card.append(top, h3, desc, tags, match); return card;
}

function findMeals(shouldScroll = false) {
  const diet = document.querySelector('#diet-select').value;
  const maxTime = Number(document.querySelector('#time-select').value);
  const cuisine = document.querySelector('#cuisine-select').value;
  const available = [...pantry.keys()].flatMap(item => [norm(item), ...(ingredientAliases[item] || []).map(norm)]);
  let ranked = recipes.filter(r => r.time <= maxTime && (diet === 'any' || r.diet.includes(diet)) && (cuisine === 'any' || r.cuisine === cuisine)).map(recipe => {
    const matched = recipe.ingredients.filter(i => available.some(a => a === norm(i) || a.includes(norm(i)) || norm(i).includes(a)));
    const missing = recipe.ingredients.filter(i => !matched.includes(i));
    return {recipe, matched, missing, score: matched.length, coverage: matched.length / recipe.ingredients.length};
  });
  ranked.sort((a,b) => b.score-a.score || b.coverage-a.coverage || a.missing.length-b.missing.length);
  if (pantry.size) ranked = ranked.filter(item => item.matched.length > 0);
  grid.replaceChildren();
  if (!ranked.length) {
    const empty = document.createElement('div'); empty.className = 'empty-results';
    const strong = document.createElement('strong'); strong.textContent = pantry.size ? 'No close matches just yet.' : 'Add a few ingredients to begin.';
    const message = document.createTextNode(pantry.size ? 'Try adding another ingredient or adjusting your diet and time filters.' : 'Add what you have above and we’ll find meals that fit.');
    empty.append(strong, message); grid.append(empty);
  } else ranked.slice(0,3).forEach(item => grid.append(createCard(item.recipe,item.matched,item.missing)));
  title.textContent = pantry.size ? 'Meals that make the most of your ingredients' : 'A few ideas to get you started';
  count.textContent = pantry.size ? `${Math.min(3,ranked.length)} MATCH${ranked.length === 1 ? '' : 'ES'}` : 'SAMPLE IDEAS';
  if (shouldScroll) document.querySelector('#results').scrollIntoView({behavior:'smooth', block:'start'});
}

document.querySelector('#ingredient-form').addEventListener('submit', e => { e.preventDefault(); addIngredient(input.value); });
photoInput.addEventListener('change', () => {
  const file = photoInput.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => { pendingPhoto = reader.result; photoPreview.replaceChildren(); const img = document.createElement('img'); img.src = pendingPhoto; img.alt = 'Selected ingredient photo'; const label = document.createElement('span'); label.textContent = file.name; photoPreview.append(img, label); photoPreview.hidden = false; };
  reader.readAsDataURL(file);
});
document.querySelectorAll('.suggestion').forEach(button => button.addEventListener('click', () => addIngredient(button.dataset.ingredient)));
document.querySelector('#find-button').addEventListener('click', () => findMeals(true));
document.querySelector('#diet-select').addEventListener('change', findMeals);
document.querySelector('#time-select').addEventListener('change', findMeals);
document.querySelector('#cuisine-select').addEventListener('change', findMeals);
function renderProductCard(product, source = 'Open Food Facts') {
  const card = document.createElement('a'); card.className='product-card'; card.href=product.url || '#'; card.target='_blank'; card.rel='noopener noreferrer';
  const image=document.createElement('img');
  const placeholder='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 62"><rect width="60" height="62" fill="#f4f5f0"/><path d="M22 14h16v6l5 5v26H17V25l5-5z" fill="#c99662"/><path d="M22 14h16v6H22z" fill="#54704f"/><path d="M20 30h20v14H20z" fill="#dfd0a4"/><circle cx="27" cy="36" r="2" fill="#a84331"/><circle cx="34" cy="39" r="2" fill="#a84331"/></svg>');
  image.src=product.image_front_small_url || product.image_front_url || placeholder;
  image.alt=''; image.loading='lazy';
  image.addEventListener('error', () => { if (image.src !== placeholder) image.src=placeholder; });
  const info=document.createElement('span'); info.className='product-info';
  const name=document.createElement('strong'); name.textContent=product.product_name || product.name || 'Unnamed product';
  const brand=document.createElement('span'); brand.textContent=product.brands || product.brand || 'Brand not listed';
  const detail=document.createElement('span'); detail.className='product-score';
  detail.textContent=product.nutriscore_grade ? `Nutri-Score ${product.nutriscore_grade.toUpperCase()}` : source;
  info.append(name,brand,detail); card.append(image,info); return card;
}
function searchGoogle(query, type = 'product') {
  const clean = query.trim();
  if (!clean) return;
  const search = type === 'product' ? `${clean} food product buy` : clean;
  const url = `https://www.google.com/search?q=${encodeURIComponent(search)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

document.querySelector('#product-search').addEventListener('submit', event => {
  event.preventDefault();
  const query = document.querySelector('#product-query').value;
  if (!query.trim()) return;
  searchGoogle(query);
});
document.querySelector('#lookup-product').addEventListener('click', () => {
  const selected = document.querySelector('#product-preset').value;
  if (!selected) { document.querySelector('#product-query').focus(); return; }
  document.querySelector('#product-query').value = selected;
  searchGoogle(selected);
});

const countryNames = `Afghanistan,Albania,Algeria,Andorra,Angola,Antigua and Barbuda,Argentina,Armenia,Australia,Austria,Azerbaijan,Bahamas,Bahrain,Bangladesh,Barbados,Belarus,Belgium,Belize,Benin,Bhutan,Bolivia,Bosnia and Herzegovina,Botswana,Brazil,Brunei,Bulgaria,Burkina Faso,Burundi,Cabo Verde,Cambodia,Cameroon,Canada,Central African Republic,Chad,Chile,China,Colombia,Comoros,Congo,Costa Rica,Côte d’Ivoire,Croatia,Cuba,Cyprus,Czechia,Democratic Republic of the Congo,Denmark,Djibouti,Dominica,Dominican Republic,Ecuador,Egypt,El Salvador,Equatorial Guinea,Eritrea,Estonia,Eswatini,Ethiopia,Fiji,Finland,France,Gabon,Gambia,Georgia,Germany,Ghana,Greece,Grenada,Guatemala,Guinea,Guinea-Bissau,Guyana,Haiti,Honduras,Hungary,Iceland,India,Indonesia,Iran,Iraq,Ireland,Israel,Italy,Jamaica,Japan,Jordan,Kazakhstan,Kenya,Kiribati,Kuwait,Kyrgyzstan,Laos,Latvia,Lebanon,Lesotho,Liberia,Libya,Liechtenstein,Lithuania,Luxembourg,Madagascar,Malawi,Malaysia,Maldives,Mali,Malta,Marshall Islands,Mauritania,Mauritius,Mexico,Micronesia,Moldova,Monaco,Mongolia,Montenegro,Morocco,Mozambique,Myanmar,Namibia,Nauru,Nepal,Netherlands,New Zealand,Nicaragua,Niger,Nigeria,North Korea,North Macedonia,Norway,Oman,Pakistan,Palau,Palestine,Panama,Papua New Guinea,Paraguay,Peru,Philippines,Poland,Portugal,Qatar,Romania,Russia,Rwanda,Saint Kitts and Nevis,Saint Lucia,Saint Vincent and the Grenadines,Samoa,San Marino,São Tomé and Príncipe,Saudi Arabia,Senegal,Serbia,Seychelles,Sierra Leone,Singapore,Slovakia,Slovenia,Solomon Islands,Somalia,South Africa,South Korea,South Sudan,Spain,Sri Lanka,Sudan,Suriname,Sweden,Switzerland,Syria,Taiwan,Tajikistan,Tanzania,Thailand,Timor-Leste,Togo,Tonga,Trinidad and Tobago,Tunisia,Turkey,Turkmenistan,Tuvalu,Uganda,Ukraine,United Arab Emirates,United Kingdom,United States,Uruguay,Uzbekistan,Vanuatu,Vatican City,Venezuela,Vietnam,Yemen,Zambia,Zimbabwe`.split(',');
const countrySelect = document.querySelector('#country-select');
countryNames.forEach(country => { const option=document.createElement('option'); option.value=country; option.textContent=country; countrySelect.append(option); });
document.querySelector('#country-search').addEventListener('click', () => {
  const country = countrySelect.value;
  if (!country) { countrySelect.focus(); return; }
  const links = document.querySelector('#country-links');
  links.replaceChildren();
  [
    {label:`${country} cuisine and food culture`,query:`${country} cuisine traditional food culture`},
    {label:`Popular dishes from ${country}`,query:`popular traditional dishes of ${country}`},
    {label:`Ingredients and spices used in ${country}`,query:`common ingredients spices in ${country} cuisine`}
  ].forEach(item => { const link=document.createElement('a'); link.href=`https://www.google.com/search?q=${encodeURIComponent(item.query)}`; link.target='_blank'; link.rel='noopener noreferrer'; link.textContent=`${item.label} ↗`; links.append(link); });
});
findMeals();
