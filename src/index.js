import SwaggerUIBundle from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';
import yaml from '../docs/swagger.yml'

const ui = SwaggerUIBundle({
    spec: yaml,
    dom_id: '#swagger-ui',
});
