import { PDFOptions } from './pdf-options.model';

export enum PdfJobStatus {
    WAITING = 'waiting',
    PROCESSING = 'processing',
    FINISHED = 'finished',
    ERROR = 'error',
}

export interface HtmlContent {
    /** handlebars template */
    templateName?: string;
    /** word template */
    wordItemId?: string;
    content: any;
    options?: PDFOptions;
}

export interface PdfPage {
    name: string;
    parts: HtmlContent[];
}

export interface PdfJob {
    _id: string;
    name: string;
    printerId?: string;
    directPrint?: boolean;
    printConfig?: any;
    status: PdfJobStatus;
    pages: PdfPage[];
    // only when finished
    contentType: string;
    path: string;
    url: string;

    email?: string;
    responseUrl?: string;

    user: string;
    createdAt: Date;
    updatedAt: Date;
}
