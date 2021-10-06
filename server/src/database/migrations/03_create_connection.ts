import {Knex} from 'knex';

/* Conexão entre professor e aluno */

export async function up(knex: Knex){
  return knex.schema.createTable('connections', table =>{
    table.increments('id').primary();

    /* Chave estrangeira (foreign_key) referenciando a chave primaria (primary key) da tabela user */
    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

    table.timestamp('create_at')
    .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    .notNullable();
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('connections');
}