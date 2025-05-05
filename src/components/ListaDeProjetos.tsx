import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNavigation,
} from "@/components/core/carousel";
import { projects } from "@/data/projects";

export function ListaDeProjetos() {
	return (
		<div className="relative w-full py-8">
			<Carousel>
				<CarouselContent>
					{projects.map((project) => (
						<CarouselItem key={project.name}>
							<a href={project.slug} className="flex flex-col gap-2">
								<div className="relative aspect-video w-full overflow-hidden rounded-md">
									<img
										src={project.imageURL}
										alt={`Imagem do projeto ${project.name}`}
										className="object-cover"
										loading="lazy"
										decoding="async"
										fetchPriority="high"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<h3 className="md:text-xl text-lg font-medium">
										{project.name}
									</h3>
									<span className="text-sm font-medium dark:text-zinc-500 text-zinc-700">
										{project.tag}
									</span>
									<span className="text-sm font-medium dark:text-zinc-500 text-zinc-700">
										{project.date}
									</span>
								</div>
							</a>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselNavigation
					className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2"
					classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
					alwaysShow
				/>
			</Carousel>
		</div>
	);
}
