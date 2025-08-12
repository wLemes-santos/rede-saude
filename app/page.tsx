import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Stethoscope,
  Users,
  MapPin,
  Phone,
  Calendar,
  Zap,
  Building2,
  FileText,
  Camera,
  Activity,
  Brain,
  Eye,
  Microscope,
  Monitor,
  Waves,
  Headphones,
  Wind,
  UserCheck,
  Cloud,
  Settings,
  Truck,
  Mail,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function PortfolioPage() {
  const especialidades = [
    "Clínica Médica",
    "Pediatria",
    "Ginecologia e Obstetrícia",
    "Cardiologia",
    "Ortopedia e Traumatologia",
    "Neurologia",
    "Psiquiatria",
    "Dermatologia",
    "Cirurgia Geral",
    "Otorrinolaringologia",
    "Urologia",
    "Pneumologia",
    "Reumatologia",
    "Endocrinologia",
    "Infectologia",
    "Medicina do Trabalho",
    "Gastroenterologia",
    "Geriatria",
    "Medicina Esportiva",
    "Saúde da Mulher",
    "Saúde do Idoso",
  ];

  const examesDetalhados = [
    {
      nome: "Mamografia digital",
      descricao: "",
      icon: <Eye className="h-6 w-6" />,
      categoria: "Exames e procedimentos de radiologia",
    },
    {
      nome: "Ressonância magnética",
      descricao: "",
      icon: <Camera className="h-6 w-6" />,
      categoria: "Exames e procedimentos de radiologia",
    },
    {
      nome: "Densitometria Óssea",
      descricao:
        "Avalia a massa óssea para diagnóstico de osteopenia e osteoporose, especialmente em coluna lombar e fêmur.",
      icon: <Monitor className="h-6 w-6" />,
      categoria: "Exames e procedimentos de radiologia",
    },
    {
      nome: "Ultrassonografia (diversos tipos)",
      descricao:
        "Inclui abdominal, transvaginal, morfológico, com Doppler e ecocardiograma. Diagnóstico por ondas sonoras, não invasivo e indolor.",
      icon: <Waves className="h-6 w-6" />,
      categoria: "Exames e procedimentos de radiologia",
    },
    {
      nome: "Raio-X (Radiografia)",
      descricao:
        "Exame simples, rápido e seguro que usa radiação ionizante para visualizar ossos, pulmões e outros tecidos. Inclui tórax, coluna, face e panorâmico.",
      icon: <Activity className="h-6 w-6" />,
      categoria: "Exames e procedimentos de radiologia",
    },
    {
      nome: "Eletrocardiograma (ECG)",
      descricao:
        "Registra a atividade elétrica do coração para detectar arritmias, infarto e alterações cardíacas. Rápido, indolor e não invasivo.",
      icon: <Heart className="h-6 w-6" />,
      categoria: "Exames Cardiológicos",
    },
    {
      nome: "Eletroencefalograma (EEG)",
      descricao:
        "Registra a atividade elétrica cerebral, usado para diagnosticar epilepsia, distúrbios do sono e alterações neurológicas.",
      icon: <Brain className="h-6 w-6" />,
      categoria: "Exames Neurológicos",
    },
    {
      nome: "Eletroneuromiografia",
      descricao: "",
      icon: <Brain className="h-6 w-6" />,
      categoria: "Exames Neurológicos",
    },
    {
      nome: "Espirometria",
      descricao:
        "Avalia a função pulmonar e a capacidade respiratória, essencial para diagnóstico de asma, bronquite e DPOC.",
      icon: <Wind className="h-6 w-6" />,
      categoria: "Exames Funcionais",
    },
    {
      nome: "Audiometria",
      descricao:
        "Mede a capacidade auditiva e identifica perdas auditivas. Inclui audiometria tonal, vocal e infantil.",
      icon: <Headphones className="h-6 w-6" />,
      categoria: "Exames Funcionais",
    },
    {
      nome: "Teste Ergométrico (Esteira)",
      descricao:
        "Avalia o desempenho cardiovascular durante esforço físico, detectando isquemias e arritmias.",
      icon: <Activity className="h-6 w-6" />,
      categoria: "Exames Cardiológicos",
    },
    {
      nome: "Exame MAPA",
      descricao:
        "Monitoramento ambulatorial da pressão arterial por 24h. Diagnostica hipertensão e avalia eficácia de tratamentos.",
      icon: <Monitor className="h-6 w-6" />,
      categoria: "Exames Cardiológicos",
    },
    {
      nome: "Exame Holter",
      descricao:
        "Registro contínuo da atividade elétrica do coração por 24h para diagnosticar arritmias e avaliar tratamentos.",
      icon: <Heart className="h-6 w-6" />,
      categoria: "Exames Cardiológicos",
    },
    {
      nome: "Ecocardiograma",
      descricao: "",
      icon: <Heart className="h-6 w-6" />,
      categoria: "Exames Cardiológicos",
    },
    {
      nome: "Audiometria tonal e vocal",
      descricao: "",
      icon: <Microscope className="h-6 w-6" />,
      categoria: "Exames auriculares",
    },
    {
      nome: "Imitanciometria",
      descricao: "",
      icon: <Microscope className="h-6 w-6" />,
      categoria: "Exames auriculares",
    },
    {
      nome: "Colonoscopia",
      descricao: "",
      icon: <Microscope className="h-6 w-6" />,
      categoria: "Exames de gastroenterologia",
    },
    {
      nome: "Endoscopia",
      descricao: "",
      icon: <Microscope className="h-6 w-6" />,
      categoria: "Exames de gastroenterologia",
    },
    {
      nome: "Biópsia",
      descricao: "",
      icon: <Microscope className="h-6 w-6" />,
      categoria: "Exames de gastroenterologia",
    },
    {
      nome: "Eletrocardiograma",
      descricao: "",
      icon: <Microscope className="h-6 w-6" />,
      categoria: "Exames de saúde ocupacional",
    },
    {
      nome: "Eletroencefalograma",
      descricao: "",
      icon: <Microscope className="h-6 w-6" />,
      categoria: "Exames de saúde ocupacional",
    },
    {
      nome: "Espirometria",
      descricao: "",
      icon: <Microscope className="h-6 w-6" />,
      categoria: "Exames de saúde ocupacional",
    },
    {
      nome: "Raio x oit",
      descricao: "",
      icon: <Microscope className="h-6 w-6" />,
      categoria: "Exames de saúde ocupacional",
    },
    {
      nome: "Acuidade visual",
      descricao: "",
      icon: <Microscope className="h-6 w-6" />,
      categoria: "Exames de saúde ocupacional",
    },
    {
      nome: "Audiometria",
      descricao: "",
      icon: <Microscope className="h-6 w-6" />,
      categoria: "Exames de saúde ocupacional",
    },
    {
      nome: "Exames clínicos",
      descricao: "",
      icon: <Microscope className="h-6 w-6" />,
      categoria: "Exames de saúde ocupacional",
    },

    {
      nome: "Exames Laboratoriais",
      descricao:
        "Coleta de sangue, urina e outros materiais para análise. Posto de coleta disponível na unidade central.",
      icon: <Microscope className="h-6 w-6" />,
      categoria: "Laboratório",
    },
    {
      nome: "Espirometria",
      descricao: "",
      icon: <UserCheck className="h-6 w-6" />,
      categoria: "Exame de pneumologia",
    },
  ];

  const procedimentosEnfermagem = [
    "Administração de medicamentos e vacinas",
    "Curativos e cuidados com feridas",
    "Verificação de sinais vitais e glicemia capilar",
    "Coleta de exames laboratoriais",
    "Cateterismo vesical",
    "Cuidados com ostomias e drenos",
    "Preparação e acompanhamento em exames",
    "Educação em saúde e cuidados com pacientes especiais",
  ];

  const unidades = [
    {
      nome: "Policlínica Vale do Jurumirim LTDA",
      endereco: "Rua Salvador de Freitas, 1316, Térreo - Centro, Itaí/SP",
      cep: "CEP 18730-027",
      tipo: "Unidade Principal",
    },
    {
      nome: "Santa Casa de Misericórdia de Itaí",
      endereco: "SP-255, km 363 - Jardim Monte Alto, Itaí/SP",
      cep: "",
      tipo: "Parceria Hospitalar",
    },
    {
      nome: "Santa Casa de Misericórdia de Avaré",
      endereco: "Rua Mato Grosso, anexo à Santa Casa - Centro, Avaré/SP",
      cep: "",
      tipo: "Parceria Hospitalar",
    },
    {
      nome: "Santa Casa de Misericórdia de Taquarituba",
      endereco: "Rua Mal. Floriano Peixoto, 95 - Centro, Taquarituba/SP",
      cep: "",
      tipo: "Parceria Hospitalar",
    },
    {
      nome: "Unimed Avaré - Núcleo de Exames Complementares",
      endereco: "Rua Santa Catarina, 1961 - Vila, Avaré/SP",
      cep: "",
      tipo: "Parceria Clínica",
    },
    {
      nome: "Unidade de Saúde Móvel - Carreta Adaptada",
      endereco:
        "Atendimento itinerante em parceria com instituições públicas e privadas",
      cep: "",
      tipo: "Unidade Móvel",
    },
  ];

  const servicosImplantacao = [
    "Instalação de equipamentos: Raio-X, Mamografia, Tomografia, Densitometria Óssea, Ressonância Magnética e Ultrassonografia",
    "Disponibilização de médicos especializados para execução e interpretação de exames",
    "Sistema PACS para gestão integrada de imagens médicas",
    "Armazenamento seguro das imagens pelo prazo legal exigido",
    "Equipe técnica composta por biomédicos e técnicos em radiologia treinados e qualificados",
    "Serviço de telecomando para operação remota de exames",
    "Corpo clínico de médicos radiologistas para liberação de laudos via teleradiologia",
    "Atendimento a exames eletivos e situações de urgência e emergência",
  ];

  const servicosDigitalizacao = [
    "Digitalização de documentos físicos de todas as áreas (assistencial, administrativa e jurídica)",
    "Indexação e organização por categorias e metadados",
    "Armazenamento em nuvem com controle de acesso e conformidade com a LGPD",
    "Acesso remoto e seguro por meio de sistemas integrados",
    "Consultoria para definição de fluxos documentais e prazos legais de guarda",
    "Redução de papel, espaço físico e riscos de extravio",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              {/* Logo Real do Grupo Saúde */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ndeimyWMlkTO5DS3JG5eSWfMvlXnYS.png"
                  alt="Grupo Saúde Vale do Jurumirim"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Portfólio Institucional</h1>
                <p className="text-blue-200">Grupo Saúde Vale do Jurumirim</p>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className=" border-white hover:bg-blue-50 bg-transparent"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contato
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center text-xl text-blue-900">
                    <Phone className="h-5 w-5 mr-2" />
                    Entre em Contato
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {/* Logo no modal */}
                  <div className="text-center">
                    <div className="inline-block bg-blue-50 p-4 rounded-lg mb-4">
                      <img
                        src="/images/logo-grupo-saude-completo.png"
                        alt="Grupo Saúde Vale do Jurumirim"
                        className="h-20 w-auto object-contain mx-auto"
                      />
                    </div>
                  </div>

                  {/* Informações de contato */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Telefone</p>
                        <p className="text-blue-600 font-medium">
                          (14) 3193-0025
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Endereço Principal
                        </p>
                        <p className="text-gray-600 text-sm">
                          Rua Salvador de Freitas, 1316, Térreo
                          <br />
                          Centro - Itaí/SP
                          <br />
                          CEP 18730-027
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Horário de Atendimento
                        </p>
                        <p className="text-gray-600 text-sm">
                          Segunda a Sexta: 7h às 17h
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                      <Mail className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Agendamentos
                        </p>
                        <p className="text-gray-600 text-sm">
                          Disponível em todas as unidades
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Botões de ação */}
                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Ligar Agora
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <MapPin className="h-4 w-4 mr-2" />
                      Ver Localização
                    </Button>
                  </div>

                  <div className="text-center pt-2">
                    <p className="text-sm text-gray-500">
                      Nossa equipe está preparada para acolher sua necessidade
                      com eficiência, empatia e segurança.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Apresentação Institucional */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            {/* Logo grande na apresentação */}
            <div className="inline-block bg-white p-8 rounded-xl shadow-lg mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ndeimyWMlkTO5DS3JG5eSWfMvlXnYS.png"
                alt="Grupo Saúde Vale do Jurumirim"
                className="h-32 w-auto object-contain mx-auto"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Apresentação Institucional
            </h2>
          </div>
          <div className="max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl text-justify">
              Somos um grupo de soluções aplicadas nas mais diversas áreas de
              saúde. Transformamos estruturas hospitalares e clínicas com
              inteligência a serviço do cuidado. Utilizamos tecnologia de ponta
              e dados clínicos para entregar diagnósticos mais rápidos, precisos
              e acessíveis, sempre com foco na experiência do paciente.
              Acreditamos que saúde de qualidade precisa ser eficiente, mas
              também humana. Trabalhamos em parcerias públicas e privadas,
              atuando lado a lado com os profissionais da saúde para apoiar
              decisões clínicas com segurança e confiança. Nossa excelência é
              reconhecida por um corpo clínico de referência e protocolos
              rigorosos que garantem credibilidade à prática médica. Somos por
              você. E estamos prontos para levar saúde de qualidade - com
              escala, precisão e compromisso com a vida.
            </p>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Nossas Áreas de Atuação
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas e integradas em saúde, com expertise
              em diferentes segmentos para atender todas as necessidades de
              nossos parceiros e pacientes.
            </p>
          </div>
          <section className="py-16 px-6 bg-blue-50">
            <div className="container mx-auto">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Gestão de Diagnóstico em Unidades Existentes
              </h3>
              <Card className="max-w-5xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-blue-900">
                    <Building2 className="h-8 w-8 text-blue-600 mr-3" />
                    Revitalização de Setores de Diagnósticos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                    Muitos gestores hospitalares possuem setores de diagnósticos
                    obsoletos ou subutilizados, sem manutenção correta e sem mão
                    de obra qualificada, devido aos altos custos operacionais. O
                    Grupo Saúde - Vale do Jurumirim, através de projeto e estudo
                    aplicado de viabilidade, pode assumir a gestão completa do
                    respectivo setor, revitalizando-o e transformando-o com
                    expertise, tecnologia e recursos humanos adequados.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Settings className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Expertise Técnica
                      </h4>
                      <p className="text-sm text-gray-600">
                        Profissionais qualificados e experientes
                      </p>
                    </div>
                    <div className="text-center">
                      <Zap className="h-12 w-12 text-green-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-green-900 mb-2">
                        Tecnologia Avançada
                      </h4>
                      <p className="text-sm text-gray-600">
                        Equipamentos modernos e atualizados
                      </p>
                    </div>
                    <div className="text-center">
                      <Users className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-purple-900 mb-2">
                        Recursos Humanos
                      </h4>
                      <p className="text-sm text-gray-600">
                        Equipe especializada e treinada
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          {/* Implantação de Serviços */}
          <section className="py-16 px-6 bg-white">
            <div className="container mx-auto">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Implantação de Serviços de Diagnósticos
              </h3>
              <div className="max-w-5xl mx-auto">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-blue-900">
                      <Building2 className="h-8 w-8 text-blue-600 mr-3" />
                      Serviços Completos de Diagnóstico por Imagem
                    </CardTitle>
                    <CardDescription className="text-justify">
                      Ideal para hospitais que estão encerrando estruturas
                      antigas, reformulando seus serviços ou iniciando as
                      atividades pela primeira vez.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6 text-justify">
                      Oferecemos um modelo completo de planejamento, implantação
                      e gestão da planta diagnóstica hospitalar, com foco em
                      eficiência, qualidade e sustentabilidade.
                    </p>
                  </CardContent>
                </Card>

                <h4 className="text-xl font-semibold text-gray-900 mb-6">
                  Serviços Disponibilizados:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {servicosImplantacao.map((servico, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">{servico}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 text-white">
                  <CardContent className="p-6">
                    <p className="text-lg font-medium">
                      Com essa estrutura, transformamos ambientes vazios ou
                      obsoletos em unidades modernas e resolutivas de
                      diagnósticos por imagem.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          {/* Transformação Digital */}
          <section className="py-16 px-6 bg-green-50">
            <div className="container mx-auto">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Transformação Digital de Arquivos Físicos
              </h3>
              <div className="max-w-5xl mx-auto">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-green-900">
                      <FileText className="h-8 w-8 text-green-600 mr-3" />
                      Digitalização no Âmbito Hospitalar
                    </CardTitle>
                    <CardDescription>
                      Soluções completas para modernização da gestão, redução de
                      espaço físico e cumprimento das exigências legais de
                      guarda documental.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6 text-justify">
                      Com equipamentos de alta performance e protocolos técnicos
                      seguros, realizamos a conversão de prontuários, laudos,
                      fichas clínicas e documentos administrativos para o
                      formato digital, com organização, catalogação e acesso
                      facilitado.
                    </p>
                  </CardContent>
                </Card>

                <h4 className="text-xl font-semibold text-gray-900 mb-6">
                  Serviços Incluídos:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {servicosDigitalizacao.map((servico, index) => (
                    <Card key={index} className="border-l-4 border-l-green-500">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">{servico}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Cloud className="h-12 w-12 flex-shrink-0" />
                      <p className="text-lg font-medium">
                        Com essa solução, sua instituição ganha agilidade no
                        acesso à informação, melhora a segurança da guarda
                        documental e promove a sustentabilidade na saúde.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          {/*  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-600 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                    <Building2 className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-red-900">
                      Gestão Hospitalar
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-red-50 text-red-700 mt-1"
                    >
                      Terceirização Especializada
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-justify">
                  Assumimos a gestão completa de setores diagnósticos
                  hospitalares, revitalizando estruturas e otimizando resultados
                  operacionais.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    Revitalização de setores
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    Gestão operacional completa
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    Redução de custos
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-indigo-600 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
                    <Cloud className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-indigo-900">
                      Transformação Digital
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-indigo-50 text-indigo-700 mt-1"
                    >
                      Inovação Tecnológica
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-justify">
                  Digitalização completa de arquivos médicos e administrativos,
                  com armazenamento seguro em nuvem e conformidade com a LGPD.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    Digitalização de prontuários
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    Armazenamento em nuvem
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    Conformidade LGPD
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Camera className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-blue-900">
                      Diagnóstico por Imagem
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 mt-1"
                    >
                      Tecnologia Avançada
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-justify">
                  Equipamentos de última geração para exames de alta precisão,
                  incluindo Raio-X digital, Tomografia Computadorizada (com e
                  sem contraste e sedação), Ultrassonografia (convencional,
                  morfológica, doppler e biópsas), Ressonância Magnética (com e
                  sem contraste e sedação), Densitometria Óssea (02 segmentos,
                  03 segmentos e corpo inteiro) e Mamografia Digital.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Sistema PACS integrado
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Laudos via teleradiologia
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Comando remoto de maquinários por equipe biomédica (se
                    necessário);
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Laudos via teleradiologia
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Atendimento 24h para urgências e emergências;
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Camera className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-blue-900">
                      Diagnóstico por procedimentos endogastricos
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-justify">
                  Procedimentos realizados com profissionais altamente
                  capacitados e equipamentos de ponta, para maior conforto e
                  segurança do paciente
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Endoscopia e colonoscopia
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Biópsias
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-600 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                    <UserCheck className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-green-900">
                      Medicina do Trabalho
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-green-50 text-green-700 mt-1"
                    >
                      Compliance Total
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-justify">
                  Serviços completos de saúde ocupacional, garantindo
                  conformidade com as normas regulamentadoras e proteção à saúde
                  dos trabalhadores, tanto em unidade fixa, quanto em unidade
                  móvel.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    ASO – adm/dem ou periódico
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Exames laboratoriais
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Acuidade Visual
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Audiometria ocupacional
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Eletrocardiograma ocupacional
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Eletroencefalograma ocupacional
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Espirometria ocupacional
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Raio X OIT
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-600 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <Microscope className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-purple-900">
                      Laboratório Clínico
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-purple-50 text-purple-700 mt-1"
                    >
                      Análises Precisas
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-justify">
                  Análises laboratoriais completas com coleta especializada,
                  processamento automatizado e resultados rápidos para apoio ao
                  diagnóstico médico.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Coleta domiciliar disponível
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Resultados online
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Controle de qualidade rigoroso
                  </div>
                </div>
              </CardContent>
            </Card>
          </div> */}
          {/* Estatísticas */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-2">
                Nossa Presença no Mercado
              </h4>
              <p className="text-blue-100">
                Números que demonstram nossa expertise e confiabilidade
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">8+</div>
                <div className="text-sm text-blue-100">
                  Unidades de Atendimento
                </div>
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-sm text-blue-100">
                  Especialidades Médicas
                </div>
              </div> */}
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-sm text-blue-100">Tipos de Exames</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-blue-100">
                  Compromisso com Qualidade
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades Médicas */}
      {/* 
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Especialidades Médicas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {especialidades.map((especialidade, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow border-blue-100">
                <CardContent className="p-4">
                  <Stethoscope className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-medium text-gray-900">{especialidade}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Exames e Procedimentos Detalhados */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Exames e Procedimentos Realizados
          </h3>

          {/* Agrupamento por categoria */}
          {[
            "Exames e procedimentos de radiologia",
            "Exames Cardiológicos",
            "Exame de pneumologia",
            "Exames auriculares",
            "Exames de gastroenterologia",
            "Exames Neurológicos",
            "Laboratório",
            "Exames de saúde ocupacional",
          ].map((categoria) => (
            <div key={categoria} className="mb-12">
              <h4 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center">
                <div className="w-1 h-8 bg-blue-600 mr-3"></div>
                {categoria}
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {examesDetalhados
                  .filter((exame) => exame.categoria === categoria)
                  .map((exame, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                            {exame.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg text-blue-900">
                              {exame.nome}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 leading-relaxed">
                          {exame.descricao}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Procedimentos de Enfermagem */}
      {/*  <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Procedimentos de Enfermagem
          </h3>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-green-900">
                <Users className="h-8 w-8 text-green-600 mr-3" />
                Cuidados Especializados
              </CardTitle>
              <CardDescription>
                A equipe de enfermagem realiza uma ampla gama de procedimentos
                essenciais para o cuidado ao patiente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {procedimentosEnfermagem.map((procedimento, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{procedimento}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Gestão de Diagnóstico */}

      {/* Unidades de Atendimento */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Unidades de Atendimento
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unidades.map((unidade, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow h-full"
              >
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    {unidade.tipo === "Unidade Móvel" ? (
                      <Truck className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    ) : (
                      <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    )}
                    <div>
                      <Badge
                        variant="secondary"
                        className={`mb-2 ${
                          unidade.tipo === "Unidade Principal"
                            ? "bg-blue-100 text-blue-800"
                            : unidade.tipo === "Unidade Móvel"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {unidade.tipo}
                      </Badge>
                      <CardTitle className="text-lg text-gray-900">
                        {unidade.nome}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {unidade.endereco}
                    {unidade.cep && (
                      <>
                        <br />
                        <span className="font-medium">{unidade.cep}</span>
                      </>
                    )}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de Instalações */}
      {/* <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Nossas Instalações e Equipamentos
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Conheça nossa infraestrutura moderna e equipamentos de última
            geração, que garantem diagnósticos precisos e atendimento de
            qualidade.
          </p> */}

      {/* Galeria de Imagens */}
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250728-WA0005.jpg-d0bO1QX7R3bvpds2lHIQRTfXLaGwBx.jpeg"
                  alt="Sala de Raio-X com equipamento moderno"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Sala de Raio-X</h4>
                  <p className="text-sm opacity-90">
                    Equipamento digital moderno
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250728-WA0006.jpg-vqdDzXXCdu3MTLbImHeM1acqe60goH.jpeg"
                  alt="Estação de análise de imagens com monitor mostrando radiografia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Análise de Imagens</h4>
                  <p className="text-sm opacity-90">
                    Sistema digital de laudos
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250728-WA0008.jpg-4kIkwoRdWIOBnIsfdrz7piaYJFKSnw.jpeg"
                  alt="Laboratório de análises clínicas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Laboratório</h4>
                  <p className="text-sm opacity-90">
                    Área de coleta e análises
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250728-WA0004.jpg-mbnyC2j15Sfbwp6YBSq8CJoyZSUNJn.jpeg"
                  alt="Equipamento de radiologia completo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Radiologia Digital</h4>
                  <p className="text-sm opacity-90">Tecnologia de ponta</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250728-WA0003.jpg-qcXwcrWY9XwCVjEmYpGDBROcoilM1C.jpeg"
                  alt="Sala de exames com equipamentos especializados"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Sala de Exames</h4>
                  <p className="text-sm opacity-90">Ambiente climatizado</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250728-WA0007.jpg-F7bqkyqVUGn3cR03JBxvppvB4CbKjE.jpeg"
                  alt="Área de preparação e coleta de materiais"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Área de Coleta</h4>
                  <p className="text-sm opacity-90">Materiais organizados</p>
                </div>
              </div>
            </Card>
          </div> */}

      {/* Vídeos das Instalações */}
      {/*  <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Camera className="h-5 w-5 text-blue-600 mr-2" />
                  Tour Virtual - Unidade Móvel
                </CardTitle>
                <CardDescription>
                  Conheça por dentro nossa unidade móvel equipada com tecnologia
                  de ponta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative rounded-lg overflow-hidden">
                  <video
                    controls
                    className="w-full h-64 object-cover"
                    poster="/placeholder.svg?height=256&width=400&text=Tour+Virtual"
                  >
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20250728-WA0006-EzzYcUCOQyP6jjKYojXgOog90pOx4A.mp4"
                      type="video/mp4"
                    />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Monitor className="h-5 w-5 text-green-600 mr-2" />
                  Equipamentos em Funcionamento
                </CardTitle>
                <CardDescription>
                  Veja nossos equipamentos de diagnóstico em operação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative rounded-lg overflow-hidden">
                  <video
                    controls
                    className="w-full h-64 object-cover"
                    poster="/placeholder.svg?height=256&width=400&text=Equipamentos"
                  >
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20250728-WA0007-5aZpLzY3oPlPLvZSw9jOJBaE90jnYQ.mp4"
                      type="video/mp4"
                    />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </CardContent>
            </Card>
          </div> */}

      {/* Destaques da Infraestrutura */}
      {/* <div className="mt-12 grid md:grid-cols-4 gap-6">
            <Card className="text-center border-blue-100">
              <CardContent className="p-6">
                <Camera className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-blue-900 mb-2">
                  Equipamentos Digitais
                </h4>
                <p className="text-sm text-gray-600">
                  Tecnologia de última geração para diagnósticos precisos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-100">
              <CardContent className="p-6">
                <Microscope className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-green-900 mb-2">
                  Laboratório Completo
                </h4>
                <p className="text-sm text-gray-600">
                  Análises clínicas com resultados rápidos e confiáveis
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-100">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-purple-900 mb-2">
                  Unidade Móvel
                </h4>
                <p className="text-sm text-gray-600">
                  Atendimento itinerante com estrutura hospitalar
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-100">
              <CardContent className="p-6">
                <Activity className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                <h4 className="font-semibold text-orange-900 mb-2">
                  Ambiente Controlado
                </h4>
                <p className="text-sm text-gray-600">
                  Climatização e proteção radiológica adequadas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Agendamentos e Contato */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          {/* <h3 className="text-3xl font-bold mb-6">Agendamentos e Contato</h3>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto text-justify">
            Os agendamentos podem ser realizados diretamente nas unidades de
            atendimento ou por meio dos canais institucionais do Grupo Saúde -
            Vale do Jurumirim.
          </p> */}

          {/* <div className="bg-white/10 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-center">
              Contato para Agendamentos
            </h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="text-lg font-medium">(14) 3193-0025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Rua Salvador de Freitas, 1316 - Centro, Itaí/SP</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Stethoscope className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Consultas Especializadas</h4>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Camera className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Exames Diagnósticos</h4>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <UserCheck className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">
                  Procedimentos Ocupacionais
                </h4>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Building2 className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Acordos e Parcerias</h4>
              </CardContent>
            </Card>
          </div> */}

          <p className="text-lg mb-8 text-blue-100">
            Nossa equipe está preparada para acolher sua necessidade com
            eficiência, empatia e segurança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Agendar Atendimento
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Mail className="h-5 w-5 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                {/* Logo no footer */}
                <div className="bg-white p-3 rounded-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ndeimyWMlkTO5DS3JG5eSWfMvlXnYS.png"
                    alt="Grupo Saúde Vale do Jurumirim"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Portfólio Institucional</h4>
                  <p className="text-gray-400">Grupo Saúde Vale do Jurumirim</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-justify">
                Transformamos nossa estrutura em inteligência a serviço do
                cuidado, combinando escala, especialização e proximidade para
                levar saúde de qualidade a todos os brasileiros.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Serviços Principais</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Exames Diagnósticos</li>
                <li>Gestão de Diagnóstico</li>
                <li>Implantação de Serviços</li>
                <li>Transformação Digital</li>
                <li>Medicina do Trabalho</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Agendamentos disponíveis em todas as unidades</p>
                <p>Atendimento especializado</p>
                <p>Parcerias institucionais</p>
                <p>Consultoria em saúde</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>
              &copy; 2024 Grupo Saúde - Vale do Jurumirim. Todos os direitos
              reservados.
            </p>
            <p className="mt-2 text-sm">
              Portfólio Institucional do Grupo Saúde Vale do Jurumirim
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
