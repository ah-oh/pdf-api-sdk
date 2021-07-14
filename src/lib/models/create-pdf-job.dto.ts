export interface HtmlContentDto {
    templateName?: string;
    wordItemId?: string;
    content: any;
    options: any;
}

export interface PdfPageDto {
    name: string;
    parts: HtmlContentDto[];
}

export interface CreatePdfJobDto {
    printerId?: string;
    directPrint?: boolean;
    printConfig?: any;

    pages: PdfPageDto[];
    name?: string;

    responseUrl?: string;

    email?: string;
}
