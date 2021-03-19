import {ConfigSmtp} from "@smartsoft-test/shared/models";

export abstract class IMailService {
    abstract send(options: {
        from?: string;
        to: string;
        subject: string;
        body: string;
        attachments?: Array<{ filename; content }>;
    }, config?: ConfigSmtp): Promise<void>;
}