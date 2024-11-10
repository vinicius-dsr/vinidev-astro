import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNavigation,
} from "@/components/core/carousel";

export function ListaDeProjetos() {
	const projectList = [
		{
			name: "Dieta AI",
			slug: "dieta-ai",
			imageURL:
				"https://utfs.io/f/FRVsZCSgds63xB92BXaLvRdsJSfNzOngi1ruactw54ZFKy0T",
			tag: "App Mobile",
			date: "2024",
		},
		{
			name: "Agenda Paragominas",
			slug: "agenda-paragominas",
			imageURL:
				"https://utfs.io/f/FRVsZCSgds63GPW7SgrGDo7E5ZMVRCJ0dpvaf26WjOg9cFNL",
			tag: "Web App",
			date: "2024",
		},
		{
			name: "Blog MDX",
			slug: "blog-mdx",
			imageURL:
				"https://utfs.io/f/FRVsZCSgds63g7pidOKi9fuI6HUAVmogTlD1bcSeQa0dwqp8",
			tag: "Blog",
			date: "2024",
		},
		{
			name: "Reis & Reis - Advocacia",
			slug: "reis-reis-advocacia",
			imageURL:
				"https://utfs.io/f/FRVsZCSgds63zo4X147PpFSchIKjQxHXruADbyBiGvaMq17s",
			tag: "Lading Page",
			date: "2024",
		},
		{
			name: "Sunclean - Energia Solar",
			slug: "sunclean-energia-solar",
			imageURL:
				"https://utfs.io/f/FRVsZCSgds63SdvZzzyePxKjV4kv25pclJYUh3LRTsFgtdBA",
			tag: "Lading Page",
			date: "2024",
		},
		{
			name: "Cardápio Digital",
			slug: "cardapio-digital",
			imageURL:
				"https://utfs.io/f/FRVsZCSgds63wrJw7SCKnrjqaFm6TNG0kl5Avt4PgZy1wBVu",
			tag: "E-commerce",
			date: "2024",
		},
	];

	return (
		<div className="relative w-full py-8">
			<Carousel>
				<CarouselContent>
					{projectList.map((project) => (
						<CarouselItem key={project.name}>
							<a href={project.slug} className="flex flex-col gap-2">
								<div className="relative aspect-video w-full overflow-hidden rounded-md">
									<img
										src={project.imageURL}
										alt={`Imagem do projeto ${project.name}`}
										className="object-cover"
										loading="lazy"
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
