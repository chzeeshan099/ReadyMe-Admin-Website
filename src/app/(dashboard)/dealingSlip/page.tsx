
import { metaObject } from '@/config/site.config';
import Index from '@/modules/dealingSlip/index'

export const metadata = {
    ...metaObject('App'),
};

export default function File() {
    return <Index />;
}
