import axios, { AxiosRequestConfig } from 'axios';
import { CreatePdfJobDto } from './models/create-pdf-job.dto';
import { PdfJob } from './models/pdf-job.model';

export default class PdfApi {
    private static BASE_URL = 'https://pdfs.ah-oh-com';

    private readonly clientId: string = '';
    private readonly clientSecret: string = '';

    constructor(clientId: string, clientSecret: string) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    public async findOne(id: string): Promise<PdfJob> {
        const options: AxiosRequestConfig = {
            method: 'GET',
            baseURL: PdfApi.BASE_URL,
            url: this.prepareUrl(`/${id}`),
            headers: this.prepareHeaders({ accept: 'application/json' }),
        };
        const res = await axios.request<PdfJob>(options);

        return res.data;
    }

    public async find(): Promise<PdfJob[]> {
        const options: AxiosRequestConfig = {
            method: 'GET',
            baseURL: PdfApi.BASE_URL,
            url: this.prepareUrl(``),
            headers: this.prepareHeaders({ accept: 'application/json' }),
        };
        const res = await axios.request<PdfJob[]>(options);

        return res.data;
    }

    public async create(dto: CreatePdfJobDto): Promise<PdfJob> {
        const options: AxiosRequestConfig = {
            method: 'PUT',
            baseURL: PdfApi.BASE_URL,
            url: this.prepareUrl(''),
            headers: this.prepareHeaders({ 'content-type': 'application/json' }),
            data: JSON.stringify(dto),
        };
        const res = await axios.request<PdfJob>(options);

        return res.data;
    }

    public async delete(id: string): Promise<PdfJob> {
        const options: AxiosRequestConfig = {
            method: 'DELETE',
            baseURL: PdfApi.BASE_URL,
            url: this.prepareUrl(`/${id}`),
            headers: this.prepareHeaders({ accept: 'application/json' }),
        };
        const res = await axios.request<PdfJob>(options);

        return res.data;
    }

    private prepareUrl(path: string): string {
        return `/api/pdf-jobs/${this.clientId}${path}`;
    }

    private prepareHeaders(headers: { [key: string]: string }): { [key: string]: string } {
        const defaultHeaders = { authorization: this.clientSecret };
        return Object.assign(defaultHeaders, headers);
    }
}
