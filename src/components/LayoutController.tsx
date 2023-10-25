import { useLocation } from '@solidjs/router';
import { Show } from 'solid-js';

// Paths where layouts don't show
export const purePaths = [
	'/auth',
];

function someStartWith(arr: string[], str: string) {
	return arr.some((v) => str.startsWith(v));
}

export default function LayoutController(props: OnlyChildren) {
	const location = useLocation();

	return (
		<Show when={!someStartWith(purePaths, location.pathname)} fallback={props.children}>
			<div>
				Create your's layout!
				<div>
					{props.children}
				</div>
			</div>
		</Show>
	);
}
