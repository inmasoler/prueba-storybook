type Props = {
	name?: string;
};

export default function Greeting({ name = 'Astro' }: Props) {
	return <p>Hello from React, {name}!</p>;
}
