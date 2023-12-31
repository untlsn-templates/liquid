// @refresh reload
import { Suspense } from 'solid-js';
import {
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Meta,
	Routes,
	Scripts,
	Title,
} from 'solid-start';
import 'virtual:uno.css';
import 'untcss-reset';
import LayoutController from '~/components/LayoutController';

export default function Root() {
	return (
		<Html lang="en">
			<Head>
				<Title>SolidStart - Bare</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Body>
				<Suspense>
					<ErrorBoundary>
						<LayoutController>
							<Routes>
								<FileRoutes />
							</Routes>
						</LayoutController>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	);
}
