
import TextContainer from "../components/TxtContainer";
import ImageContainer from "../components/ImageContainer";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <ImageContainer
        src="https://graces.com.br/wp-content/uploads/2019/02/o-que-nao-pode-faltar-na-sua-barbearia-equipamentos.jpg"
        classNames="mb-5"
      />
      <TextContainer variant="p" classNames="text-sm mb-3">
        Localizada no coração da Savassi a Barbearia Imperador traz para o
        mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a
        Barbearia Imperador já é destaque na cidade e conquista novos clientes a
        cada dia
      </TextContainer>
      <TextContainer variant="p" classNames="text-sm mb-3">
        Nossa missão é:{" "}
        <span className="font-bold italic">
          Proporcionar auto-estima e qualidade de vida aos clientes
        </span>
      </TextContainer>
      <TextContainer variant="p" classNames="text-md mb-3">
        Oferecernos profissionais experientes e antenados às mudanças no mundo
        da moda.
      </TextContainer>
      <TextContainer variant="p" classNames="text-md mb-3">
        O atendimento possui padrão de excelência e agilidade, garantindo
        qualidade e satisfação dos nossos clientes.
      </TextContainer>
    </Layout>
  );
}
