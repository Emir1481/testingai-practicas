
import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = __ENV.BASE_URL || 'http://localhost:4000';
const VUS = Number(__ENV.VUS || 5);

export const options = {
    stages: [
        { duration: '10s', target: VUS },
        { duration: '30s', target: VUS },
        { duration: '5s', target: 0 },
    ],

    thresholds: {
        http_req_duration: ['p(95)<300'],
        http_req_failed: ['rate<0.01'],
    },

    summaryTrendStats: [
        'avg', 'min', 'med', 'max', 'p(90)', 'p(95)'
    ],
};

export default function () {

    const respuesta = http.get(
        `${BASE_URL}/productos/buscar?q=remera`
    );

    check(respuesta, {
        'Estado HTTP 200': (r) => r.status === 200,

        'Productos es un array': (r) => {
            try {
                return Array.isArray(r.json().productos);
            } catch {
                return false;
            }
        },
    });

    sleep(1);
}
