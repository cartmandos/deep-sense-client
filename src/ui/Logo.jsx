import logo from '@assets/logo.png';

export default function Logo({ width = 64, height = 64 }) {
  return <img src={logo} alt="logo" width={width} height={height} />;
}
