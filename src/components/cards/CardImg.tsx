import { useGetRocketImageByIdQuery } from '../../services/spaceXApi.service';

type Props = { rocket: string | null };

function CardImg({ rocket }: Props) {
  const { data } = useGetRocketImageByIdQuery(rocket, { skip: !rocket });

  if (data != null) {
    return (
      <a className="h-40 sm:w-48 sm:h-48 flex-shrink-0" href={data} target="_blank" rel="noopener noreferrer">
        <img className="h-full w-full object-cover mx-auto rounded sm:rounded-full" src={data} alt="" loading="lazy" />
      </a>
    );
  }
}

export { CardImg };
