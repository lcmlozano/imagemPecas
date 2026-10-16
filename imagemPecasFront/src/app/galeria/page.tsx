import { Template, ImageCard } from '@/components'

export default function GaleriaPage() {
  return (
        <Template>
          <section className="grid grid-cols-5 gap-8">
              <ImageCard nome='Placa' tamanho='10MB' dataUpload='01/01/2026' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTko1M_D50n1JxZGDfoLFbt86UV8X3JX3B5bHt5DCebRwai_0tL_T_Z9uSp&s=10"/>
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard /> 
              <ImageCard />
              <ImageCard />
              <ImageCard />
          </section>
        </Template>
    );
}

