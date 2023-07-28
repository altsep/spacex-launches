import { launch } from '../../tests/mocks/data';

function Data() {
  return <pre className="text-xs">{JSON.stringify(launch, null, '\t')}</pre>;
}

export { Data };
