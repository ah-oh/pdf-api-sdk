export class BasicMailAttachmentDto {
    filename!: string;
    file!: string | Buffer; // base64
    contentType!: string;
    cid?: string;
}

export class CreateBasicMailJobDto {
    receivers!: string[];
    from!: string;
    fromAdress!: string;
    replyTo!: string;
    subject!: string;
    template!: string;
    context!: any;
    attachments?: BasicMailAttachmentDto[];
}
