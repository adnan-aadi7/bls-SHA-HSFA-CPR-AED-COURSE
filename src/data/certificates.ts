export interface CertificateRecord {
  name: string;
  course: string;
  trainingCenter: string;
  registrationId: string;
  validFrom: string;
  expiry: string;
}

export const DEFAULT_CERT_ID = '332693235404';

export const CERTIFICATES_DB: Record<string, CertificateRecord> = {
  '332693235404': {
    name: 'ADNAN HAIDER JAUHAR ALI',
    course: 'SHA HSFA CPR AED course',
    course: 'SHA HSFA CPR AED COURSE',
    trainingCenter: 'ALLIANCE INFINITE INSPECTION TRAINING',
    registrationId: '335906',
    validFrom: '28-Jul-2025',
    expiry: '28-Jul-2027',
  },
};

