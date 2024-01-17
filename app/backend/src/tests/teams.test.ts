import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app }  from '../app';
import Team from '../database/models/TeamsModel';
import teamsMocks from './mocks/teams.mocks';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando teams', () => {
  afterEach(function() { sinon.restore() });
    it('Testa se é possível listar todos os times', async () => {
      const response = await chai.request(app).get('/teams');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(teamsMocks);
    });

    it('Testa se é possível listar um time', async () => {
      const response = await chai.request(app).get('/teams/1');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(teamsMocks[0]);
    });

    it('Testa se retorna um time pelo nome', async () => {
      const response = await chai.request(app).get('/teams/Grêmio');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(teamsMocks[0]);
    });

    it('Testa se retorna um time pelo nome e id', async () => {
      const response = await chai.request(app).get('/teams/8/Grêmio');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(teamsMocks[0]);
    });
});
