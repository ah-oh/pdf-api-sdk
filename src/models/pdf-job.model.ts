import { PDFOptions } from './pdf-options.model';

export enum PdfJobStatus {
    WAITING = 'waiting',
    PROCESSING = 'processing',
    FINISHED = 'finished',
    ERROR = 'error',
}

export interface HtmlContent {
    templateName: string;
    content: any;
    options: PDFOptions;
}

export interface PdfPage {
    name: string;
    parts: HtmlContent[];
}

export interface PdfJob {
    _id: string;
    name: string;
    status: PdfJobStatus;
    pages: PdfPage[];
    // only when finished
    contentType: string;
    path: string;

    responseUrl?: string;

    user: string;
    createdAt: string;
    updatedAt: string;
}
