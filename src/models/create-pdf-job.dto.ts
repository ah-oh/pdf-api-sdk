export interface HtmlContentDto {
    templateName: string;
    content: any;
    options: any;
}

export interface PdfPageDto {
    name: string;
    parts: HtmlContentDto[];
}

export interface CreatePdfJobDto {
    pages: PdfPageDto[];
    name?: string;

    responseUrl?: string;
}
