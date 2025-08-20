export interface Doc {
	title: string;
	description?: string;
	content: string;
	lastUpdated: string;
	slug: string; 
	keywords?: string[]; 
	ogTitle?: string;
	ogDescription?: string;   
	ogImage?: string;       
	canonical?: string;     
	lastModified?: string;  
}
