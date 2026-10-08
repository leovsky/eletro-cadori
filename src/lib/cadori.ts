import p1 from "@/assets/produtos/produto-1.jpg.asset.json";
import p2 from "@/assets/produtos/produto-2.jpg.asset.json";
import p3 from "@/assets/produtos/produto-3.jpg.asset.json";
import p4 from "@/assets/produtos/produto-4.jpg.asset.json";
import p5 from "@/assets/produtos/produto-5.jpg.asset.json";
import p6 from "@/assets/produtos/produto-6.jpg.asset.json";
import p7 from "@/assets/produtos/produto-7.jpg.asset.json";
import p8 from "@/assets/produtos/produto-8.jpg.asset.json";

export const contato = {
  telefone: "(47) 3350-1115",
  telefoneHref: "tel:4733501115",
  whatsapp: "(47) 99973-4515",
  whatsappHref: "https://wa.me/5547999734515",
  email: "cadori@eletrocadori.com.br",
  endereco: "Rua Joaquim Reis, 125 - Santa Terezinha",
  cidade: "Brusque - SC, CEP 88352-320",
};

export const marcas = [
  { nome: "WEG", revenda: "Motores, inversores, chaves e produtos elétricos em geral.", reparo: "Motores elétricos." },
  { nome: "Kärcher", revenda: "Lavadoras de alta pressão domésticas e profissionais.", reparo: "Lavadoras domésticas e profissionais." },
  { nome: "Schneider", revenda: "Motobombas.", reparo: "Motobombas, com peças de reposição." },
  { nome: "Schulz", revenda: "Compressores de ar.", reparo: "Compressores, pistolas de pintura e aspiradores." },
  { nome: "Famac", revenda: "Motobombas.", reparo: "Motobombas, com peças de reposição." },
  { nome: "Trapp", revenda: "Aparadores de grama e roçadeiras.", reparo: "Trituradores, sopradores de folhas e aparadores." },
  { nome: "GMEG", revenda: "Motobombas, aparadores e compressores (Garthen, Motomil, Eletroplas).", reparo: "Motobombas, lavadoras e aparadores." },
  { nome: "Cardal", revenda: "Sem revenda de produtos.", reparo: "Duchas e aquecedores, com peças de reposição." },
];

export const produtos = [
  { img: p1.url, nome: "Motor W22 Magnet Super Premium", marca: "WEG", categoria: "Motores", desc: "Motor elétrico com rendimento Super Premium e maior eficiência energética." },
  { img: p2.url, nome: "ME-1", marca: "Schneider", categoria: "Motobombas", desc: "Motobomba multiestágio de alta pressão, de 2 a 9 estágios." },
  { img: p3.url, nome: "Lavadora K 3.30", marca: "Kärcher", categoria: "Lavadoras", desc: "Lavadora de alta pressão residencial para limpezas do dia a dia." },
  { img: p4.url, nome: "Lavadora HD 10/18 – 4 Cage", marca: "Kärcher", categoria: "Lavadoras", desc: "Lavadora de alta pressão profissional para uso intenso." },
  { img: p5.url, nome: "Cortador de grama MC-35L", marca: "Trapp", categoria: "Jardim", desc: "Cortador elétrico para jardins residenciais." },
  { img: p6.url, nome: "Roçadeira Master 1", marca: "Trapp", categoria: "Jardim", desc: "Roçadeira lateral elétrica para grama e vegetação mais alta." },
  { img: p7.url, nome: "CSL 10BR/100", marca: "Schulz", categoria: "Compressores", desc: "Compressor de ar com reservatório de 100 litros." },
  { img: p8.url, nome: "DS-04", marca: "Schneider", categoria: "Motobombas", desc: "Bomba submersível para fontes e chafarizes." },
  { img: undefined as string | undefined, nome: "BC-92 S", marca: "Schneider", categoria: "Motobombas", desc: "Motobomba centrífuga para água limpa." },
];
