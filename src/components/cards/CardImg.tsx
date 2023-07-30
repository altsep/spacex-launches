type Props = { img?: string };

function CardImg({ img }: Props) {
  if (img != null) {
    return (
      <a className="h-40 sm:w-48 sm:h-48 flex-shrink-0" href={img} target="_blank" rel="noopener noreferrer">
        <img className="h-full w-full object-cover mx-auto rounded sm:rounded-full" src={img} alt="" loading="lazy" />
      </a>
    );
  }
}

CardImg.defaultProps = {
  img: null,
};

export { CardImg };
